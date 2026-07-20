"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { ShaderMaterial } from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const vertexShader = `
varying vec2 vUv;

void main() {
    vUv = uv;

    gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(position,1.0);
}
`;

const fragmentShader = `
uniform float uTime;

varying vec2 vUv;

float hash(vec2 p){
    return fract(
        sin(dot(p,vec2(127.1,311.7)))
        *43758.5453123
    );
}

float noise(vec2 p){

    vec2 i=floor(p);
    vec2 f=fract(p);

    f=f*f*(3.0-2.0*f);

    float a=hash(i);
    float b=hash(i+vec2(1.0,0.0));
    float c=hash(i+vec2(0.0,1.0));
    float d=hash(i+vec2(1.0,1.0));

    return mix(
        mix(a,b,f.x),
        mix(c,d,f.x),
        f.y
    );
}

void main(){

    vec2 uv = vUv;

    float t = uTime * 0.08;

    //------------------------
    // Liquid distortion
    //------------------------

    float n =
        noise(
            uv*4.0
            +uTime*0.04
        );

    uv += vec2(

        sin(n*5.0+uTime)*0.035,

        cos(n*5.0-uTime)*0.035

    );

    float wave =
        sin(uv.x*10.0+t)
        +
        cos(uv.y*9.0-t);

    wave *= 0.5;

    //------------------------
    // Colors
    //------------------------

    vec3 blue =
        vec3(0.73,0.88,1.0);

    vec3 cyan =
        vec3(0.82,0.97,1.0);

    vec3 pink =
        vec3(1.0,0.82,0.93);

    vec3 lavender =
        vec3(0.90,0.86,1.0);

    vec3 white =
        vec3(1.0);

    vec3 color =
        mix(
            blue,
            cyan,
            smoothstep(-1.0,1.0,wave)
        );

    float pearl =

      smoothstep(
          0.72,
          0.95,
          sin(
              wave*3.0
              +n*4.0
          )
      );

    color += pearl*0.18;

    color =
        mix(
            color,
            pink,
            smoothstep(
                -0.3,
                0.8,
                sin(
                    uv.y*9.0
                    -t
                )
            )
        );

    color =
        mix(
            color,
            lavender,
            smoothstep(
                -0.2,
                0.9,
                cos(
                    uv.x*11.0+t
                )
            )
        );

    //------------------------
    // Pearl highlight
    //------------------------

    float highlight =
        pow(
            abs(
                sin(
                    wave*4.0
                )
            ),
            10.0
        );

    color += highlight*0.22;

    //------------------------
    // Soft glow
    //------------------------

    color =
        mix(
            color,
            white,
            0.08
        );
    
    vec3 rainbow =

    vec3(

        0.5+0.5*sin(wave*2.0),

        0.5+0.5*sin(wave*2.0+2.0),

        0.5+0.5*sin(wave*2.0+4.0)

    );

color =

mix(
    color,
    rainbow,
    0.06
);

float stars =

step(

0.998,

hash(

floor(

uv*500.0

)

)

);

color += stars;

    gl_FragColor =
        vec4(color,1.0);

}
`;

function FullscreenPlane() {
    const { viewport } = useThree();

    const material =
        useRef<ShaderMaterial>(null);

    const uniforms =
        useMemo(()=>({

            uTime:{
                value:0
            }

        }),[]);

    useFrame((state)=>{

        if(material.current){

            material.current.uniforms.uTime.value=
                state.clock.elapsedTime;

        }

    });

    return(

        <mesh scale={[viewport.width, viewport.height, 1]}>

            <planeGeometry args={[2,2]}/>

            <shaderMaterial
                ref={material}
                uniforms={uniforms}
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
            />

        </mesh>

    );

}

export default function HologramBackground(){

    return(
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-transparent"
        >
            <Canvas
                camera={{
                    position:[0,0,1],
                    fov:75,
                }}
                gl={{ antialias: true, alpha: true }}
                className="h-full w-full"
            >
                <FullscreenPlane/>
            </Canvas>
        </div>
    );

}