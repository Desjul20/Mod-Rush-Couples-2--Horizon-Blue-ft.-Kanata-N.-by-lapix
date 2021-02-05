//I stole this shader from shadertoy and added a few changes, now I feel like a thief

uniform float time;
uniform vec2 resolution;

#define t time
#define r resolution

void main() {
    vec3 c;
    float l,z=t;
    for(int i=1;i<3;i++) {
        vec2 uv,p=gl_FragCoord.xy/r;
        uv=p;
        p-=.5;
        p.x*=r.x/r.y;
        z+=.03;
        l=length(p);
        uv+=p/l*(sin(z)+1.)*abs(sin(l*7.-z*2.));
        c[i]=.01/length(abs(mod(uv,1.)-.5));
    }
    gl_FragColor=vec4(c/l,t);
}