document.addEventListener("DOMContentLoaded",(function(){let e=document.querySelectorAll(".nav-anchor-cnt"),t=document.querySelectorAll(".nav-anchor-before"),n=document.querySelectorAll(".nav-anchor-after"),s=document.querySelectorAll(".nav-anchor-line");for(let l=0;l<e.length;l++)e[l].addEventListener("mouseover",(function(){s[l].style.cssText="\n                        left:0;\n                        width:100%;\n                        transition: all ease .5s;\n                        transition-delay: .3s;\n                    \n                    ",t[l].style.cssText="\n                        top: -150%;\n                        transition:all ease .3s\n                    ",n[l].style.cssText="\n                        top: 0;\n                        transition:all ease .5s\n                    "})),e[l].addEventListener("mouseout",(()=>{s[l].style.cssText="\n                    right:0;\n                    width:0;\n                    transition: all ease .4s;\n                \n                    transition-delay: .1s;\n                ",t[l].style.cssText="\n                    top: 0;\n                    transition:all ease .5s\n                ",n[l].style.cssText="\n                    top:150%;\n                    transition:all ease .3s\n                "}));let l=0,o=document.querySelector("header");window.addEventListener("scroll",(function(){let e=window.pageYOffset;o.style.cssText=e>l?"\n                transform:translateY(-100%);\n                transition:all ease 0.5s;\n            ":"\n                transform:translateY(0%);\n                transition:all ease 0.5s;\n            ",l=e}));let a=document.querySelector(".menu-icon-cnt"),r=document.querySelector(".menu-icon-1"),c=document.querySelector(".menu-icon-2"),i=0;a.addEventListener("click",(()=>{0===i?(i=1,r.style.cssText="transform:translateY(0) ;rotate:45deg",c.style.cssText="transform:translateY(0); rotate:-45deg"):(i=0,r.style.cssText="transform:translateY(-4.5px) ;rotate:0deg",c.style.cssText="transform:translateY(4.5px); rotate:0deg")}));let d=document.querySelectorAll(".wide-btn-nd-arrow-cnt"),u=document.querySelectorAll(".wide-btn"),y=document.querySelectorAll(".arrow-btn-before"),m=document.querySelectorAll(".arrow-btn-div"),h=document.querySelectorAll(".arrow-btn-div svg");for(let e=0;e<d.length;e++)d[e].addEventListener("mouseover",(function(t){t.target.classList.contains("h-elem")&&(u[e].style.cssText="\n                        background-color:black;\n                        transition:all ease .3s;\n                        color:white\n                    ",y[e].style.cssText="\n                        scale:1;\n                        transition:all ease .3s;\n                        background-color: black;\n                    ",m[e].style.cssText="\n                        color:white;\n                        transition:all ease .3s;\n                    ",h[e].style.cssText="\n                        fill:white;\n                    ")})),d[e].addEventListener("mouseout",(function(t){t.target.classList.contains("h-elem")&&(u[e].style.cssText="\n                    background-color:none;\n                    transition:all ease .3s;\n                    color:black;\n                ",y[e].style.cssText="\n                    scale:0;\n                    transition:all ease .3s;\n                    background-color: black;\n                    color:black\n                ",m[e].style.cssText="\n                    color:black;\n                    transition:all ease .3s;\n                ",h[e].style.cssText="\n                    fill:#212121;\n                ")}));let v=document.querySelectorAll(".blink-parent"),b=document.querySelectorAll(".blink-black"),f=document.querySelectorAll(".blink-dot"),x=document.querySelector(".approch_nd_team_cnt "),g=document.querySelector(".team-photo");document.querySelectorAll(".blink-hover svg");for(let e=0;e<v.length;e++)v[e].addEventListener("mouseover",(function(t){t.target.classList.contains("blink-hover")&&(b[e].style.cssText="\n                    transition:all ease .3s;\n                    bottom:0;\n                    height:100%;\n                ",f[e].style.cssText="\n                    transition:all ease .3s;\n                    scale:1;\n                ")})),v[e].addEventListener("mouseout",(function(t){t.target.classList.contains("blink-hover")&&(b[e].style.cssText="\n                    transition:all ease .3s;\n                    top:0;\n                    height:0;\n                ",f[e].style.cssText="\n                    transition:all ease .3s;\n                    scale:0.3;\n                ")})),x.addEventListener("mouseout",(function(e){e.target.classList.contains("blink-hover")&&(g.style.cssText="\n                    scale:1;\n                    transition:all ease 1s;\n                ")})),x.addEventListener("mouseover",(function(e){e.target.classList.contains("blink-hover")&&(g.style.cssText="\n                    scale:0.95;\n                    \n                    transition:all ease 1s;\n                ")}));window.addEventListener("mousemove",(e=>{let t=e.clientX,n=e.clientY,s=t-window.innerWidth/2,l=n-window.innerHeight/2,o=Math.atan2(l,s)*(180/Math.PI),a=document.querySelectorAll(".pupil");for(let e=0;e<a.length;e++)a[e].style.rotate=`${o}deg`}))}));