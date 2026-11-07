import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./index-CRRYTGMh.js";function c(e){if(e===void 0)throw ReferenceError(`this hasn't been initialised - super() hasn't been called`);return e}function l(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var u={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}},d={duration:.5,overwrite:!1,delay:0},f,p,m,h=1e8,g=1/h,_=Math.PI*2,v=_/4,y=0,b=Math.sqrt,x=Math.cos,S=Math.sin,C=function(e){return typeof e==`string`},w=function(e){return typeof e==`function`},T=function(e){return typeof e==`number`},E=function(e){return e===void 0},D=function(e){return typeof e==`object`},O=function(e){return e!==!1},k=function(){return typeof window<`u`},A=function(e){return w(e)||C(e)},j=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){},M=Array.isArray,N=/random\([^)]+\)/g,P=/,\s*/g,F=/(?:-?\.?\d|\.)+/gi,I=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ee=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,te=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ne=/[+-]=-?[.\d]+/,re=/[^,'"\[\]\s]+/gi,ie=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,L,ae,oe,se,ce={},le={},ue,de=function(e){return(le=ze(e,ce))&&ar},fe=function(e,t){return console.warn(`Invalid property`,e,`set to`,t,`Missing plugin? gsap.registerPlugin()`)},pe=function(e,t){return!t&&console.warn(e)},me=function(e,t){return e&&(ce[e]=t)&&le&&(le[e]=t)||ce},he=function(){return 0},ge={suppressEvents:!0,isStart:!0,kill:!1},_e={suppressEvents:!0,kill:!1},ve={suppressEvents:!0},ye={},be=[],R={},xe,Se={},Ce={},z=30,we=[],B=``,V=function(e){var t=e[0],n,r;if(D(t)||w(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=we.length;r--&&!we[r].targetTest(t););n=we[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new hn(e[r],n)))||e.splice(r,1);return e},Te=function(e){return e._gsap||V(St(e))[0]._gsap},Ee=function(e,t,n){return(n=e[t])&&w(n)?e[t]():E(n)&&e.getAttribute&&e.getAttribute(t)||n},De=function(e,t){return(e=e.split(`,`)).forEach(t)||e},Oe=function(e){return Math.round(e*1e5)/1e5||0},ke=function(e){return Math.round(e*1e7)/1e7||0},Ae=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n===`+`?e+r:n===`-`?e-r:n===`*`?e*r:e/r},je=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Me=function(){var e=be.length,t=be.slice(0),n,r;for(R={},be.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ne=function(e){return!!(e._initted||e._startAt||e.add)},Pe=function(e,t,n,r){be.length&&!p&&Me(),e.render(t,n,r||!!(p&&t<0&&Ne(e))),be.length&&!p&&Me()},Fe=function(e){var t=parseFloat(e);return(t||t===0)&&(e+``).match(re).length<2?t:C(e)?e.trim():e},Ie=function(e){return e},Le=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Re=function(e){return function(t,n){for(var r in n)r in t||r===`duration`&&e||r===`ease`||(t[r]=n[r])}},ze=function(e,t){for(var n in t)e[n]=t[n];return e},Be=function e(t,n){for(var r in n)r!==`__proto__`&&r!==`constructor`&&r!==`prototype`&&(t[r]=D(n[r])?e(t[r]||(t[r]={}),n[r]):n[r]);return t},Ve=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},He=function(e){var t=e.parent||L,n=e.keyframes?Re(M(e.keyframes)):Le;if(O(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Ue=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},We=function(e,t,n,r,i){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var a=e[r],o;if(i)for(o=t[i];a&&a[i]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Ge=function(e,t,n,r){n===void 0&&(n=`_first`),r===void 0&&(r=`_last`);var i=t._prev,a=t._next;i?i._next=a:e[n]===t&&(e[n]=a),a?a._prev=i:e[r]===t&&(e[r]=i),t._next=t._prev=t.parent=null},Ke=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qe=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Je=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ye=function(e,t,n,r){return e._startAt&&(p?e._startAt.revert(_e):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Xe=function e(t){return!t||t._ts&&e(t.parent)},Ze=function(e){return e._repeat?Qe(e._tTime,e=e.duration()+e._rDelay)*e:0},Qe=function(e,t){var n=Math.floor(e=ke(e/t));return e&&n===e?n-1:n},$e=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},et=function(e){return e._end=ke(e._start+(e._tDur/Math.abs(e._ts||e._rts||g)||0))},tt=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ke(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),et(e),n._dirty||qe(n,e)),e},nt=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=$e(e.rawTime(),t),(!t._dur||gt(0,t.totalDuration(),n)-t._tTime>g)&&t.render(n,!0)),qe(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-g}},rt=function(e,t,n,r){return t.parent&&Ke(t),t._start=ke((T(n)?n:!n&&st(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==L?pt(e,n,t):e._time)+t._delay),t._end=ke(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),We(e,t,`_first`,`_last`,e._sort?`_start`:0),st(t)||(e._recent=t),r||nt(e,t),e._ts<0&&tt(e,e._tTime),e},it=function(e,t){return(ce.ScrollTrigger||fe(`scrollTrigger`,t))&&ce.ScrollTrigger.create(t,e)},at=function(e,t,n,r,i){if(wn(e,t,i),!e._initted)return 1;if(!n&&e._pt&&!p&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&xe!==en.frame)return be.push(e),e._lazy=[i,r],1},ot=function e(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||e(n))},st=function(e){var t=e.data;return t===`isFromStart`||t===`isStart`},ct=function(e,t,n,r){var i=e.ratio,a=t<0||!t&&(!e._start&&ot(e)&&(e._initted||!st(e))||(e._ts<0||e._dp._ts<0)&&!st(e))?0:1,o=e._rDelay,s=0,c,l,u;if(o&&e._repeat&&(s=gt(0,e._tDur,t),l=Qe(s,o),e._yoyo&&l&1&&(a=1-a),l!==Qe(e._tTime,o)&&(i=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==i||p||r||e._zTime===g||!t&&e._zTime){if(!e._initted&&at(e,t,r,n,s))return;for(u=e._zTime,e._zTime=t||(n?g:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=s,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ye(e,t,n,!0),e._onUpdate&&!n&&zt(e,`onUpdate`),s&&e._repeat&&!n&&e.parent&&zt(e,`onRepeat`),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ke(e,1),!n&&!p&&(zt(e,a?`onComplete`:`onReverseComplete`,!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},lt=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data===`isPause`&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data===`isPause`&&r._start<t)return r;r=r._prev}},ut=function(e,t,n,r){var i=e._repeat,a=ke(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=i?i<0?1e10:ke(a*(i+1)+e._rDelay*i):a,o>0&&!r&&tt(e,e._tTime=e._tDur*o),e.parent&&et(e),n||qe(e.parent,e),e},dt=function(e){return e instanceof _n?qe(e):ut(e,e._dur)},ft={_start:0,endTime:he,totalDuration:he},pt=function e(t,n,r){var i=t.labels,a=t._recent||ft,o=t.duration()>=h?a.endTime(!1):t._dur,s,c,l;return C(n)&&(isNaN(n)||n in i)?(c=n.charAt(0),l=n.substr(-1)===`%`,s=n.indexOf(`=`),c===`<`||c===`>`?(s>=0&&(n=n.replace(/=/,``)),(c===`<`?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(l?(s<0?a:r).totalDuration()/100:1)):s<0?(n in i||(i[n]=o),i[n]):(c=parseFloat(n.charAt(s-1)+n.substr(s+1)),l&&r&&(c=c/100*(M(r)?r[0]:r).totalDuration()),s>1?e(t,n.substr(0,s-1),r)+c:o+c)):n==null?o:+n},mt=function(e,t,n){var r=T(t[1]),i=(r?2:1)+(e<2?0:1),a=t[i],o,s;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,s=n;s&&!(`immediateRender`in o);)o=s.vars.defaults||{},s=O(s.vars.inherit)&&s.parent;a.immediateRender=O(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[i-1]}return new jn(t[0],a,t[i+1])},ht=function(e,t){return e||e===0?t(e):t},gt=function(e,t,n){return n<e?e:n>t?t:n},_t=function(e,t){return!C(e)||!(t=ie.exec(e))?``:t[1]},vt=function(e,t,n){return ht(n,function(n){return gt(e,t,n)})},yt=[].slice,bt=function(e,t){return e&&D(e)&&`length`in e&&(!t&&!e.length||e.length-1 in e&&D(e[0]))&&!e.nodeType&&e!==ae},xt=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(e){var r;return C(e)&&!t||bt(e,1)?(r=n).push.apply(r,St(e)):n.push(e)})||n},St=function(e,t,n){return m&&!t&&m.selector?m.selector(e):C(e)&&!n&&(oe||!tn())?yt.call((t||se).querySelectorAll(e),0):M(e)?xt(e,n):bt(e)?yt.call(e,0):e?[e]:[]},Ct=function(e){return e=St(e)[0]||pe(`Invalid scope`)||{},function(t){var n=e.current||e.nativeElement||e;return St(t,n.querySelectorAll?n:n===e?pe(`Invalid scope`)||se.createElement(`div`):e)}},wt=function(e){return e.sort(function(){return .5-Math.random()})},Tt=function(e){if(w(e))return e;var t=D(e)?e:{each:e},n=un(t.ease),r=t.from||0,i=parseFloat(t.base)||0,a={},o=r>0&&r<1,s=isNaN(r)||o,c=t.axis,l=r,u=r;return C(r)?l=u={center:.5,edges:.5,end:1}[r]||0:!o&&s&&(l=r[0],u=r[1]),function(e,o,d){var f=(d||t).length,p=a[f],m,g,_,v,y,x,S,C,w;if(!p){if(w=t.grid===`auto`?0:(t.grid||[1,h])[1],!w){for(S=-h;S<(S=d[w++].getBoundingClientRect().left)&&w<f;);w<f&&w--}for(p=a[f]=[],m=s?Math.min(w,f)*l-.5:r%w,g=w===h?0:s?f*u/w-.5:r/w|0,S=0,C=h,x=0;x<f;x++)_=x%w-m,v=g-(x/w|0),p[x]=y=c?Math.abs(c===`y`?v:_):b(_*_+v*v),y>S&&(S=y),y<C&&(C=y);r===`random`&&wt(p),p.max=S-C,p.min=C,p.v=f=(parseFloat(t.amount)||parseFloat(t.each)*(w>f?f-1:c?c===`y`?f/w:w:Math.max(w,f/w))||0)*(r===`edges`?-1:1),p.b=f<0?i-f:i,p.u=_t(t.amount||t.each)||0,n=n&&f<0?ln(n):n}return f=(p[e]-p.min)/p.max||0,ke(p.b+(n?n(f):f)*p.v)+p.u}},Et=function(e){var t=10**((e+``).split(`.`)[1]||``).length;return function(n){var r=ke(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(T(n)?0:_t(n))}},Dt=function(e,t){var n=M(e),r,i;return!n&&D(e)&&(r=n=e.radius||h,e.values?(e=St(e.values),(i=!T(e[0]))&&(r*=r)):e=Et(e.increment)),ht(t,n?w(e)?function(t){return i=e(t),Math.abs(i-t)<=r?i:t}:function(t){for(var n=parseFloat(i?t.x:t),a=parseFloat(i?t.y:0),o=h,s=0,c=e.length,l,u;c--;)i?(l=e[c].x-n,u=e[c].y-a,l=l*l+u*u):l=Math.abs(e[c]-n),l<o&&(o=l,s=c);return s=!r||o<=r?e[s]:t,i||s===t||T(t)?s:s+_t(t)}:Et(e))},Ot=function(e,t,n,r){return ht(M(e)?!t:n===!0?!!(n=0):!r,function(){return M(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?10**((n+``).length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},kt=function(){var e=[...arguments];return function(t){return e.reduce(function(e,t){return t(e)},t)}},At=function(e,t){return function(n){return e(parseFloat(n))+(t||_t(n))}},jt=function(e,t,n){return It(e,t,0,1,n)},Mt=function(e,t,n){return ht(n,function(n){return e[~~t(n)]})},Nt=function e(t,n,r){var i=n-t;return M(t)?Mt(t,e(0,t.length),n):ht(r,function(e){return(i+(e-t)%i)%i+t})},Pt=function e(t,n,r){var i=n-t,a=i*2;return M(t)?Mt(t,e(0,t.length-1),n):ht(r,function(e){return e=(a+(e-t)%a)%a||0,t+(e>i?a-e:e)})},Ft=function(e){return e.replace(N,function(e){var t=e.indexOf(`[`)+1,n=e.substring(t||7,t?e.indexOf(`]`):e.length-1).split(P);return Ot(t?n:+n[0],t?0:+n[1],+n[2]||1e-5)})},It=function(e,t,n,r,i){var a=t-e,o=r-n;return ht(i,function(t){return n+((t-e)/a*o||0)})},Lt=function e(t,n,r,i){var a=isNaN(t+n)?0:function(e){return(1-e)*t+e*n};if(!a){var o=C(t),s={},c,l,u,d,f;if(r===!0&&(i=1)&&(r=null),o)t={p:t},n={p:n};else if(M(t)&&!M(n)){for(u=[],d=t.length,f=d-2,l=1;l<d;l++)u.push(e(t[l-1],t[l]));d--,a=function(e){e*=d;var t=Math.min(f,~~e);return u[t](e-t)},r=n}else i||(t=ze(M(t)?[]:{},t));if(!u){for(c in n)yn.call(s,t,c,`get`,n[c]);a=function(e){return Bn(e,s)||(o?t.p:t)}}}return ht(r,a)},Rt=function(e,t,n){var r=e.labels,i=h,a,o,s;for(a in r)o=r[a]-t,o<0==!!n&&o&&i>(o=Math.abs(o))&&(s=a,i=o);return s},zt=function(e,t,n){var r=e.vars,i=r[t],a=m,o=e._ctx,s,c,l;if(i)return s=r[t+`Params`],c=r.callbackScope||e,n&&be.length&&Me(),o&&(m=o),l=s?i.apply(c,s):i.call(c),m=a,l},Bt=function(e){return Ke(e),e.scrollTrigger&&e.scrollTrigger.kill(!!p),e.progress()<1&&zt(e,`onInterrupt`),e},Vt,Ht=[],Ut=function(e){if(e){if(e=!e.name&&e.default||e,k()||e.headless){var t=e.name,n=w(e),r=t&&!n&&e.init?function(){this._props=[]}:e,i={init:he,render:Bn,add:yn,kill:Hn,modifier:Vn,rawVars:0},a={targetTest:0,get:0,getSetter:In,aliases:{},register:0};if(tn(),e!==r){if(Se[t])return;Le(r,Le(Ve(e,i),a)),ze(r.prototype,ze(i,Ve(e,a))),Se[r.prop=t]=r,e.targetTest&&(we.push(r),ye[t]=1),t=(t===`css`?`CSS`:t.charAt(0).toUpperCase()+t.substr(1))+`Plugin`}me(t,r),e.register&&e.register(ar,r,Gn)}else Ht.push(e)}},Wt=255,Gt={aqua:[0,Wt,Wt],lime:[0,Wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Wt],navy:[0,0,128],white:[Wt,Wt,Wt],olive:[128,128,0],yellow:[Wt,Wt,0],orange:[Wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Wt,0,0],pink:[Wt,192,203],cyan:[0,Wt,Wt],transparent:[Wt,Wt,Wt,0]},Kt=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Wt+.5|0},qt=function(e,t,n){var r=e?T(e)?[e>>16,e>>8&Wt,e&Wt]:0:Gt.black,i,a,o,s,c,l,u,d,f,p;if(!r){if(e.substr(-1)===`,`&&(e=e.substr(0,e.length-1)),Gt[e])r=Gt[e];else if(e.charAt(0)===`#`){if(e.length<6&&(i=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e=`#`+i+i+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):``)),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Wt,r&Wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Wt,e&Wt]}else if(e.substr(0,3)===`hsl`){if(r=p=e.match(F),!t)s=r[0]%360/360,c=r[1]/100,l=r[2]/100,a=l<=.5?l*(c+1):l+c-l*c,i=l*2-a,r.length>3&&(r[3]*=1),r[0]=Kt(s+1/3,i,a),r[1]=Kt(s,i,a),r[2]=Kt(s-1/3,i,a);else if(~e.indexOf(`=`))return r=e.match(I),n&&r.length<4&&(r[3]=1),r}else r=e.match(F)||Gt.transparent;r=r.map(Number)}return t&&!p&&(i=r[0]/Wt,a=r[1]/Wt,o=r[2]/Wt,u=Math.max(i,a,o),d=Math.min(i,a,o),l=(u+d)/2,u===d?s=c=0:(f=u-d,c=l>.5?f/(2-u-d):f/(u+d),s=u===i?(a-o)/f+(a<o?6:0):u===a?(o-i)/f+2:(i-a)/f+4,s*=60),r[0]=~~(s+.5),r[1]=~~(c*100+.5),r[2]=~~(l*100+.5)),n&&r.length<4&&(r[3]=1),r},Jt=function(e){var t=[],n=[],r=-1;return e.split(Xt).forEach(function(e){var i=e.match(ee)||[];t.push.apply(t,i),n.push(r+=i.length+1)}),t.c=n,t},Yt=function(e,t,n){var r=``,i=(e+r).match(Xt),a=t?`hsla(`:`rgba(`,o=0,s,c,l,u;if(!i)return e;if(i=i.map(function(e){return(e=qt(e,t,1))&&a+(t?e[0]+`,`+e[1]+`%,`+e[2]+`%,`+e[3]:e.join(`,`))+`)`}),n&&(l=Jt(e),s=n.c,s.join(r)!==l.c.join(r)))for(c=e.replace(Xt,`1`).split(ee),u=c.length-1;o<u;o++)r+=c[o]+(~s.indexOf(o)?i.shift()||a+`0,0,0,0)`:(l.length?l:i.length?i:n).shift());if(!c)for(c=e.split(Xt),u=c.length-1;o<u;o++)r+=c[o]+i[o];return r+c[u]},Xt=function(){var e=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Gt)e+=`|`+t+`\\b`;return RegExp(e+`)`,`gi`)}(),Zt=/hsl[a]?\(/,Qt=function(e){var t=e.join(` `),n;if(Xt.lastIndex=0,Xt.test(t))return n=Zt.test(t),e[1]=Yt(e[1],n),e[0]=Yt(e[0],n,Jt(e[1])),!0},$t,en=function(){var e=Date.now,t=500,n=33,r=e(),i=r,a=1e3/240,o=a,s=[],c,l,u,d,f,p,m=function u(m){var h=e()-i,g=m===!0,_,v,y,b;if((h>t||h<0)&&(r+=h-n),i+=h,y=i-r,_=y-o,(_>0||g)&&(b=++d.frame,f=y-d.time*1e3,d.time=y/=1e3,o+=_+(_>=a?0:a-_),v=1),g||(c=l(u)),v)for(p=0;p<s.length;p++)s[p](y,f,b,m)};return d={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(e){return f/(1e3/(e||60))},wake:function(){ue&&(!oe&&k()&&(ae=oe=window,se=ae.document||{},ce.gsap=ar,(ae.gsapVersions||(ae.gsapVersions=[])).push(ar.version),de(le||ae.GreenSockGlobals||!ae.gsap&&ae||{}),Ht.forEach(Ut)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(e){return setTimeout(e,o-d.time*1e3+1|0)},$t=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),$t=0,l=he},lagSmoothing:function(e,r){t=e||1/0,n=Math.min(r||33,t)},fps:function(e){a=1e3/(e||240),o=d.time*1e3+a},add:function(e,t,n){var r=t?function(t,n,i,a){e(t,n,i,a),d.remove(r)}:e;return d.remove(e),s[n?`unshift`:`push`](r),tn(),r},remove:function(e,t){~(t=s.indexOf(e))&&s.splice(t,1)&&p>=t&&p--},_listeners:s},d}(),tn=function(){return!$t&&en.wake()},nn={},rn=/^[\d.\-M][\d.\-,\s]/,an=/["']/g,on=function(e){for(var t={},n=e.substr(1,e.length-3).split(`:`),r=n[0],i=1,a=n.length,o,s,c;i<a;i++)s=n[i],o=i===a-1?s.length:s.lastIndexOf(`,`),c=s.substr(0,o),t[r]=isNaN(c)?c.replace(an,``).trim():+c,r=s.substr(o+1).trim();return t},sn=function(e){var t=e.indexOf(`(`)+1,n=e.indexOf(`)`),r=e.indexOf(`(`,t);return e.substring(t,~r&&r<n?e.indexOf(`)`,n+1):n)},cn=function(e){var t=(e+``).split(`(`),n=nn[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf(`{`)?[on(t[1])]:sn(e).split(`,`).map(Fe)):nn._CE&&rn.test(e)?nn._CE(``,e):n},ln=function(e){return function(t){return 1-e(1-t)}},un=function(e,t){return e&&(w(e)?e:nn[e]||cn(e))||t},dn=function(e,t,n,r){n===void 0&&(n=function(e){return 1-t(1-e)}),r===void 0&&(r=function(e){return e<.5?t(e*2)/2:1-t((1-e)*2)/2});var i={easeIn:t,easeOut:n,easeInOut:r},a;return De(e,function(e){for(var t in nn[e]=ce[e]=i,nn[a=e.toLowerCase()]=n,i)nn[a+(t===`easeIn`?`.in`:t===`easeOut`?`.out`:`.inOut`)]=nn[e+`.`+t]=i[t]}),i},fn=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pn=function e(t,n,r){var i=n>=1?n:1,a=(r||(t?.3:.45))/(n<1?n:1),o=a/_*(Math.asin(1/i)||0),s=function(e){return e===1?1:i*2**(-10*e)*S((e-o)*a)+1},c=t===`out`?s:t===`in`?function(e){return 1-s(1-e)}:fn(s);return a=_/a,c.config=function(n,r){return e(t,n,r)},c},mn=function e(t,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},i=t===`out`?r:t===`in`?function(e){return 1-r(1-e)}:fn(r);return i.config=function(n){return e(t,n)},i};De(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(e,t){var n=t<5?t+1:t;dn(e+`,Power`+(n-1),t?function(e){return e**+n}:function(e){return e},function(e){return 1-(1-e)**n},function(e){return e<.5?(e*2)**n/2:1-((1-e)*2)**n/2})}),nn.Linear.easeNone=nn.none=nn.Linear.easeIn,dn(`Elastic`,pn(`in`),pn(`out`),pn()),(function(e,t){var n=1/t,r=2*n,i=2.5*n,a=function(a){return a<n?e*a*a:a<r?e*(a-1.5/t)**2+.75:a<i?e*(a-=2.25/t)*a+.9375:e*(a-2.625/t)**2+.984375};dn(`Bounce`,function(e){return 1-a(1-e)},a)})(7.5625,2.75),dn(`Expo`,function(e){return 2**(10*(e-1))*e+e*e*e*e*e*e*(1-e)}),dn(`Circ`,function(e){return-(b(1-e*e)-1)}),dn(`Sine`,function(e){return e===1?1:-x(e*v)+1}),dn(`Back`,mn(`in`),mn(`out`),mn()),nn.SteppedEase=nn.steps=ce.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+ +!t,i=+!!t,a=1-g;return function(e){return((r*gt(0,a,e)|0)+i)*n}}},d.ease=nn[`quad.out`],De(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(e){return B+=e+`,`+e+`Params,`});var hn=function(e,t){this.id=y++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ee,this.set=t?t.getSetter:In},gn=function(){function e(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,ut(this,+e.duration,1,1),this.data=e.data,m&&(this._ctx=m,m.data.push(this)),$t||en.wake()}var t=e.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,ut(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,t){if(tn(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(tt(this,e),!n._dp||n.parent||nt(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&rt(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!t||this._initted&&Math.abs(this._zTime)===g||!this._initted&&this._dur&&e||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),Pe(this,e,t)),this},t.time=function(e,t){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+Ze(this))%(this._dur+this._rDelay)||(e?this._dur:0),t):this._time},t.totalProgress=function(e,t){return arguments.length?this.totalTime(this.totalDuration()*e,t):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,t){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+Ze(this),t):this.duration()?Math.min(1,this._time/this._dur):+(this.rawTime()>0)},t.iteration=function(e,t){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,t):this._repeat?Qe(this._tTime,n)+1:1},t.timeScale=function(e,t){if(!arguments.length)return this._rts===-g?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?$e(this.parent._time,this):this._tTime,r=this._rts<0;this._rts=+e||0,this._ts=this._ps||e===-g?0:this._rts;var i=this.totalDuration();return(r!==this._rts<0||n>0&&n<i)&&this.totalTime(gt(-Math.abs(this._delay),i,n),t!==!1),et(this),Je(this)},t.paused=function(e){if(!arguments.length)return this._ps;if(this._ps!==e){if(this._ps=e,e)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{tn(),this._ts=this._rts;var t=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,n=this.progress()===1&&Math.abs(this._zTime)!==g,r;if(n)for(this._tTime-=g,r=this._first;r;){if(!r._dur&&r._zTime<0&&r._ts&&r._start<=t+g){n=!1;break}r=r._next}this.totalTime(t,n)}}return this},t.startTime=function(e){if(arguments.length){this._start=ke(e);var t=this.parent||this._dp;return t&&(t._sort||!this.parent)&&rt(t,this,this._start-this._delay),this}return this._start},t.endTime=function(e){return this._start+(O(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var t=this.parent||this._dp;return t?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$e(t.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=ve);var t=p;return p=e,Ne(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!==`nested`&&e.kill!==!1&&this.kill(),p=t,this},t.globalTime=function(e){for(var t=this,n=arguments.length?e:t.rawTime();t;)n=t._start+n/(Math.abs(t._ts)||1),t=t._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,dt(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var t=this._time;return this._rDelay=e,dt(this),t?this.time(t):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,t){return this.totalTime(pt(this,e),O(t))},t.restart=function(e,t){return this.play().totalTime(e?-this._delay:0,O(t)),this._dur||(this._zTime=-g),this},t.play=function(e,t){return e!=null&&this.seek(e,t),this.reversed(!1).paused(!1)},t.reverse=function(e,t){return e!=null&&this.seek(e||this.totalDuration(),t),this.reversed(!0).paused(!1)},t.pause=function(e,t){return e!=null&&this.seek(e,t),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-g:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-g,this},t.isActive=function(){var e=this.parent||this._dp,t=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=t&&n<this.endTime(!0)-g)},t.eventCallback=function(e,t,n){var r=this.vars;return arguments.length>1?(t?(r[e]=t,n&&(r[e+`Params`]=n),e===`onUpdate`&&(this._onUpdate=t)):delete r[e],this):r[e]},t.then=function(e){var t=this,n=t._prom;return new Promise(function(r){var i=w(e)?e:Ie,a=function(){var e=t.then;t.then=null,n&&n(),w(i)&&(i=i(t))&&(i.then||i===t)&&(t.then=e),r(i),t.then=e};t._initted&&t.totalProgress()===1&&t._ts>=0||!t._tTime&&t._ts<0?a():t._prom=a})},t.kill=function(){Bt(this)},e}();Le(gn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-g,_prom:0,_ps:!1,_rts:1});var _n=function(e){l(t,e);function t(t,n){var r;return t===void 0&&(t={}),r=e.call(this,t)||this,r.labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=O(t.sortChildren),L&&rt(t.parent||L,c(r),n),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&it(c(r),t.scrollTrigger),r}var n=t.prototype;return n.to=function(e,t,n){return mt(0,arguments,this),this},n.from=function(e,t,n){return mt(1,arguments,this),this},n.fromTo=function(e,t,n,r){return mt(2,arguments,this),this},n.set=function(e,t,n){return t.duration=0,t.parent=this,He(t).repeatDelay||(t.repeat=0),t.immediateRender=!!t.immediateRender,new jn(e,t,pt(this,n),1),this},n.call=function(e,t,n){return rt(this,jn.delayedCall(0,e,t),n)},n.staggerTo=function(e,t,n,r,i,a,o){return n.duration=t,n.stagger=n.stagger||r,n.onComplete=a,n.onCompleteParams=o,n.parent=this,new jn(e,n,pt(this,i)),this},n.staggerFrom=function(e,t,n,r,i,a,o){return n.runBackwards=1,He(n).immediateRender=O(n.immediateRender),this.staggerTo(e,t,n,r,i,a,o)},n.staggerFromTo=function(e,t,n,r,i,a,o,s){return r.startAt=n,He(r).immediateRender=O(r.immediateRender),this.staggerTo(e,t,r,i,a,o,s)},n.render=function(e,t,n){var r=this._time,i=this._dirty?this.totalDuration():this._tDur,a=this._dur,o=e<=0?0:ke(e),s=this._zTime<0!=e<0&&(this._initted||!a),c,l,u,d,f,m,h,_,v,y,b,x;if(this!==L&&o>i&&e>=0&&(o=i),o!==this._tTime||n||s){if(r!==this._time&&a&&(o+=this._time-r,e+=this._time-r),c=o,v=this._start,_=this._ts,m=!_,s&&(a||(r=this._zTime),(e||!t)&&(this._zTime=e)),this._repeat){if(b=this._yoyo,f=a+this._rDelay,this._repeat<-1&&e<0)return this.totalTime(f*100+e,t,n);if(c=ke(o%f),o===i?(d=this._repeat,c=a):(y=ke(o/f),d=~~y,d&&d===y&&(c=a,d--),c>a&&(c=a)),y=Qe(this._tTime,f),!r&&this._tTime&&y!==d&&this._tTime-y*f-this._dur<=0&&(y=d),b&&d&1&&(c=a-c,x=1),d!==y&&!this._lock){var S=b&&y&1,C=S===(b&&d&1);if(d<y&&(S=!S),r=S?0:o%a?a:o,this._lock=1,this.render(r||(x?0:ke(d*f)),t,!a)._lock=0,this._tTime=o,!t&&this.parent&&zt(this,`onRepeat`),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,y=d),r&&r!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act||(a=this._dur,i=this._tDur,C&&(this._lock=2,r=S?a:-1e-4,this.render(r,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!m))return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=lt(this,ke(r),ke(c)),h&&(o-=c-(c=h._start))),this._tTime=o,this._time=c,this._act=!!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=e,r=0),!r&&o&&a&&!t&&!y&&(zt(this,`onStart`),this._tTime!==o))return this;if(c>=r&&e>=0)for(l=this._first;l;){if(u=l._next,(l._act||c>=l._start)&&l._ts&&h!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(c-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(c-l._start)*l._ts,t,n),c!==this._time||!this._ts&&!m){h=0,u&&(o+=this._zTime=-g);break}}l=u}else{l=this._last;for(var w=e<0?e:c;l;){if(u=l._prev,(l._act||w<=l._end)&&l._ts&&h!==l){if(l.parent!==this)return this.render(e,t,n);if(l.render(l._ts>0?(w-l._start)*l._ts:(l._dirty?l.totalDuration():l._tDur)+(w-l._start)*l._ts,t,n||p&&Ne(l)),c!==this._time||!this._ts&&!m){h=0,u&&(o+=this._zTime=w?-g:g);break}}l=u}}if(h&&!t&&(this.pause(),h.render(c>=r?0:-g)._zTime=c>=r?1:-1,this._ts))return this._start=v,et(this),this.render(e,t,n);this._onUpdate&&!t&&zt(this,`onUpdate`,!0),(o===i&&this._tTime>=this.totalDuration()||!o&&r)&&(v!==this._start&&Math.abs(_)===Math.abs(this._ts)||this._lock||((e||!a)&&(o===i&&this._ts>0||!o&&this._ts<0)&&Ke(this,1),t||e<0&&!r||!o&&!r&&i||(zt(this,o===i&&e>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(o<i&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(e,t){var n=this;if(T(t)||(t=pt(this,t,e)),!(e instanceof gn)){if(M(e))return e.forEach(function(e){return n.add(e,t)}),this;if(C(e))return this.addLabel(e,t);if(w(e))e=jn.delayedCall(0,e);else return this}return this===e?this:rt(this,e,t)},n.getChildren=function(e,t,n,r){e===void 0&&(e=!0),t===void 0&&(t=!0),n===void 0&&(n=!0),r===void 0&&(r=-h);for(var i=[],a=this._first;a;)a._start>=r&&(a instanceof jn?t&&i.push(a):(n&&i.push(a),e&&i.push.apply(i,a.getChildren(!0,t,n)))),a=a._next;return i},n.getById=function(e){for(var t=this.getChildren(1,1,1),n=t.length;n--;)if(t[n].vars.id===e)return t[n]},n.remove=function(e){return C(e)?this.removeLabel(e):w(e)?this.killTweensOf(e):(e.parent===this&&Ge(this,e),e===this._recent&&(this._recent=this._last),qe(this))},n.totalTime=function(t,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ke(en.time-(this._ts>0?t/this._ts:(this.totalDuration()-t)/-this._ts))),e.prototype.totalTime.call(this,t,n),this._forcing=0,this):this._tTime},n.addLabel=function(e,t){return this.labels[e]=pt(this,t),this},n.removeLabel=function(e){return delete this.labels[e],this},n.addPause=function(e,t,n){var r=jn.delayedCall(0,t||he,n);return r.data=`isPause`,this._hasPause=1,rt(this,r,pt(this,e))},n.removePause=function(e){var t=this._first;for(e=pt(this,e);t;)t._start===e&&t.data===`isPause`&&Ke(t),t=t._next},n.killTweensOf=function(e,t,n){for(var r=this.getTweensOf(e,n),i=r.length;i--;)Sn!==r[i]&&r[i].kill(e,t);return this},n.getTweensOf=function(e,t){for(var n=[],r=St(e),i=this._first,a=T(t),o;i;)i instanceof jn?je(i._targets,r)&&(a?(!Sn||i._initted&&i._ts)&&i.globalTime(0)<=t&&i.globalTime(i.totalDuration())>t:!t||i.isActive())&&n.push(i):(o=i.getTweensOf(r,t)).length&&n.push.apply(n,o),i=i._next;return n},n.tweenTo=function(e,t){t=t||{};var n=this,r=pt(n,e),i=t,a=i.startAt,o=i.onStart,s=i.onStartParams,c=i.immediateRender,l,u=jn.to(n,Le({ease:t.ease||`none`,lazy:!1,immediateRender:!1,time:r,overwrite:`auto`,duration:t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale())||g,onStart:function(){if(n.pause(),!l){var e=t.duration||Math.abs((r-(a&&`time`in a?a.time:n._time))/n.timeScale());u._dur!==e&&ut(u,e,0,1).render(u._time,!0,!0),l=1}o&&o.apply(u,s||[])}},t));return c?u.render(0):u},n.tweenFromTo=function(e,t,n){return this.tweenTo(t,Le({startAt:{time:pt(this,e)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(e){return e===void 0&&(e=this._time),Rt(this,pt(this,e))},n.previousLabel=function(e){return e===void 0&&(e=this._time),Rt(this,pt(this,e),1)},n.currentLabel=function(e){return arguments.length?this.seek(e,!0):this.previousLabel(this._time+g)},n.shiftChildren=function(e,t,n){n===void 0&&(n=0);var r=this._first,i=this.labels,a;for(e=ke(e);r;)r._start>=n&&(r._start+=e,r._end+=e),r=r._next;if(t)for(a in i)i[a]>=n&&(i[a]+=e);return qe(this)},n.invalidate=function(t){var n=this._first;for(this._lock=0;n;)n.invalidate(t),n=n._next;return e.prototype.invalidate.call(this,t)},n.clear=function(e){e===void 0&&(e=!0);for(var t=this._first,n;t;)n=t._next,this.remove(t),t=n;return this._dp&&(this._time=this._tTime=this._pTime=0),e&&(this.labels={}),qe(this)},n.totalDuration=function(e){var t=0,n=this,r=n._last,i=h,a,o,s;if(arguments.length)return n.timeScale((n._repeat<0?n.duration():n.totalDuration())/(n.reversed()?-e:e));if(n._dirty){for(s=n.parent;r;)a=r._prev,r._dirty&&r.totalDuration(),o=r._start,o>i&&n._sort&&r._ts&&!n._lock?(n._lock=1,rt(n,r,o-r._delay,1)._lock=0):i=o,o<0&&r._ts&&(t-=o,(!s&&!n._dp||s&&s.smoothChildTiming)&&(n._start+=ke(o/n._ts),n._time-=o,n._tTime-=o),n.shiftChildren(-o,!1,-1/0),i=0),r._end>t&&r._ts&&(t=r._end),r=a;ut(n,n===L&&n._time>t?n._time:t,1,1),n._dirty=0}return n._tDur},t.updateRoot=function(e){if(L._ts&&(Pe(L,$e(e,L)),xe=en.frame),en.frame>=z){z+=u.autoSleep||120;var t=L._first;if((!t||!t._ts)&&u.autoSleep&&en._listeners.length<2){for(;t&&!t._ts;)t=t._next;t||en.sleep()}}},t}(gn);Le(_n.prototype,{_lock:0,_hasPause:0,_forcing:0});var vn=function(e,t,n,r,i,a,o){var s=new Gn(this._pt,e,t,0,1,zn,null,i),c=0,l=0,u,d,f,p,m,h,g,_;for(s.b=n,s.e=r,n+=``,r+=``,(g=~r.indexOf(`random(`))&&(r=Ft(r)),a&&(_=[n,r],a(_,e,t),n=_[0],r=_[1]),d=n.match(te)||[];u=te.exec(r);)p=u[0],m=r.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)===`rgba(`&&(f=1),p!==d[l++]&&(h=parseFloat(d[l-1])||0,s._pt={_next:s._pt,p:m||l===1?m:`,`,s:h,c:p.charAt(1)===`=`?Ae(h,p)-h:parseFloat(p)-h,m:f&&f<4?Math.round:0},c=te.lastIndex);return s.c=c<r.length?r.substring(c,r.length):``,s.fp=o,(ne.test(r)||g)&&(s.e=0),this._pt=s,s},yn=function(e,t,n,r,i,a,o,s,c,l){w(r)&&(r=r(i||0,e,a));var d=e[t],f=n===`get`?w(d)?c?e[t.indexOf(`set`)||!w(e[`get`+t.substr(3)])?t:`get`+t.substr(3)](c):e[t]():d:n,p=w(d)?c?Pn:Nn:Mn,m;if(C(r)&&(~r.indexOf(`random(`)&&(r=Ft(r)),r.charAt(1)===`=`&&(m=Ae(f,r)+(_t(f)||0),(m||m===0)&&(r=m))),!l||f!==r||Cn)return!isNaN(f*r)&&r!==``?(m=new Gn(this._pt,e,t,+f||0,r-(f||0),typeof d==`boolean`?Rn:Ln,0,p),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!d&&!(t in e)&&fe(t,r),vn.call(this,e,t,f,r,p,s||u.stringFilter,c))},bn=function(e,t,n,r,i){if(w(e)&&(e=On(e,i,t,n,r)),!D(e)||e.style&&e.nodeType||M(e)||j(e))return C(e)?On(e,i,t,n,r):e;var a={},o;for(o in e)a[o]=On(e[o],i,t,n,r);return a},xn=function(e,t,n,r,i,a){var o,s,c,l;if(Se[e]&&(o=new Se[e]).init(i,o.rawVars?t[e]:bn(t[e],r,i,a,n),n,r,a)!==!1&&(n._pt=s=new Gn(n._pt,i,e,0,1,o.render,o,0,o.priority),n!==Vt))for(c=n._ptLookup[n._targets.indexOf(i)],l=o._props.length;l--;)c[o._props[l]]=s;return o},Sn,Cn,wn=function e(t,n,r){var i=t.vars,a=i.ease,o=i.startAt,s=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,m=i.yoyoEase,_=i.keyframes,v=i.autoRevert,y=t._dur,b=t._startAt,x=t._targets,S=t.parent,C=S&&S.data===`nested`?S.vars.targets:x,w=t._overwrite===`auto`&&!f,T=t.timeline,E=i.easeReverse||m,D,k,A,j,M,N,P,F,I,ee,te,ne,re;if(!T||_&&a||(a=`none`),t._ease=un(a,d.ease),t._rEase=E&&(un(E)||t._ease),t._from=!T&&!!i.runBackwards,t._from&&(t.ratio=1),!T||_&&!i.stagger){if(F=x[0]?Te(x[0]).harness:0,ne=F&&i[F.prop],D=Ve(i,ye),b&&(b._zTime<0&&b.progress(1),n<0&&u&&s&&!v?b.render(-1,!0):b.revert(u&&y?_e:ge),b._lazy=0),o){if(Ke(t._startAt=jn.set(x,Le({data:`isStart`,overwrite:!1,parent:S,immediateRender:!0,lazy:!b&&O(c),startAt:null,delay:0,onUpdate:l&&function(){return zt(t,`onUpdate`)},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(p||!s&&!v)&&t._startAt.revert(_e),s&&y&&n<=0&&r<=0){n&&(t._zTime=n);return}}else if(u&&y&&!b){if(n&&(s=!1),A=Le({overwrite:!1,data:`isFromStart`,lazy:s&&!b&&O(c),immediateRender:s,stagger:0,parent:S},D),ne&&(A[F.prop]=ne),Ke(t._startAt=jn.set(x,A)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(p?t._startAt.revert(_e):t._startAt.render(-1,!0)),t._zTime=n,!s)e(t._startAt,g,g);else if(!n)return}for(t._pt=t._ptCache=0,c=y&&O(c)||c&&!y,k=0;k<x.length;k++){if(M=x[k],P=M._gsap||V(x)[k]._gsap,t._ptLookup[k]=ee={},R[P.id]&&be.length&&Me(),te=C===x?k:C.indexOf(M),F&&(I=new F).init(M,ne||D,t,te,C)!==!1&&(t._pt=j=new Gn(t._pt,M,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(e){ee[e]=j}),I.priority&&(N=1)),!F||ne)for(A in D)Se[A]&&(I=xn(A,D,t,te,M,C))?I.priority&&(N=1):ee[A]=j=yn.call(t,M,A,`get`,D[A],te,C,0,i.stringFilter);t._op&&t._op[k]&&t.kill(M,t._op[k]),w&&t._pt&&(Sn=t,L.killTweensOf(M,ee,t.globalTime(n)),re=!t.parent,Sn=0),t._pt&&c&&(R[P.id]=1)}N&&Wn(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!re,_&&n<=0&&T.render(h,!0,!0)},Tn=function(e,t,n,r,i,a,o,s){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],l,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(l=d[f][t],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==t&&l.fp!==t;)l=l._next;if(!l)return Cn=1,e.vars[t]=`+=0`,wn(e,o),Cn=0,s?pe(t+` not eligible for reset. Try splitting into individual properties`):1;c.push(l)}for(f=c.length;f--;)u=c[f],l=u._pt||u,l.s=(r||r===0)&&!i?r:l.s+(r||0)+a*l.c,l.c=n-l.s,u.e&&(u.e=Oe(n)+_t(u.e)),u.b&&(u.b=l.s+_t(u.b))},En=function(e,t){var n=e[0]?Te(e[0]).harness:0,r=n&&n.aliases,i,a,o,s;if(!r)return t;for(a in i=ze({},t),r)if(a in i)for(s=r[a].split(`,`),o=s.length;o--;)i[s[o]]=i[a];return i},Dn=function(e,t,n,r){var i=t.ease||r||`power1.inOut`,a,o;if(M(t))o=n[e]||(n[e]=[]),t.forEach(function(e,n){return o.push({t:n/(t.length-1)*100,v:e,e:i})});else for(a in t)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(e),v:t[a],e:i})},On=function(e,t,n,r,i){return w(e)?e.call(t,n,r,i):C(e)&&~e.indexOf(`random(`)?Ft(e):e},kn=B+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`,An={};De(kn+`,id,stagger,delay,duration,paused,scrollTrigger`,function(e){return An[e]=1}),kn=kn.split(`,`);var jn=function(e){l(t,e);function t(t,n,r,i){var a;typeof n==`number`&&(r.duration=n,n=r,r=null),a=e.call(this,i?n:He(n))||this;var o=a.vars,s=o.duration,l=o.delay,d=o.immediateRender,p=o.stagger,m=o.overwrite,h=o.keyframes,_=o.defaults,v=o.scrollTrigger,y=n.parent||L,b=(M(t)||j(t)?T(t[0]):`length`in n)?[t]:St(t),x,S,C,w,E,k,N,P;if(a._targets=b.length?V(b):pe(`GSAP target `+t+` not found. https://gsap.com`,!u.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,h||p||A(s)||A(l)){n=a.vars;var F=n.easeReverse||n.yoyoEase;if(x=a.timeline=new _n({data:`nested`,defaults:_||{},targets:y&&y.data===`nested`?y.vars.targets:b}),x.kill(),x.parent=x._dp=c(a),x._start=0,p||A(s)||A(l)){if(w=b.length,N=p&&Tt(p),D(p))for(E in p)~kn.indexOf(E)&&(P||(P={}),P[E]=p[E]);for(S=0;S<w;S++)C=Ve(n,An),C.stagger=0,F&&(C.easeReverse=F),P&&ze(C,P),k=b[S],C.duration=+On(s,c(a),S,k,b),C.delay=(+On(l,c(a),S,k,b)||0)-a._delay,!p&&w===1&&C.delay&&(a._delay=l=C.delay,a._start+=l,C.delay=0),x.to(k,C,N?N(S,k,b):0),x._ease=nn.none;x.duration()?s=l=0:a.timeline=0}else if(h){He(Le(x.vars.defaults,{ease:`none`})),x._ease=un(h.ease||n.ease||`none`);var I=0,ee,te,ne;if(M(h))h.forEach(function(e){return x.to(b,e,`>`)}),x.duration();else{for(E in C={},h)E===`ease`||E===`easeEach`||Dn(E,h[E],C,h.easeEach);for(E in C)for(ee=C[E].sort(function(e,t){return e.t-t.t}),I=0,S=0;S<ee.length;S++)te=ee[S],ne={ease:te.e,duration:(te.t-(S?ee[S-1].t:0))/100*s},ne[E]=te.v,x.to(b,ne,I),I+=ne.duration;x.duration()<s&&x.to({},{duration:s-x.duration()})}}s||a.duration(s=x.duration())}else a.timeline=0;return m===!0&&!f&&(Sn=c(a),L.killTweensOf(b),Sn=0),rt(y,c(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(d||!s&&!h&&a._start===ke(y._time)&&O(d)&&Xe(c(a))&&y.data!==`nested`)&&(a._tTime=-g,a.render(Math.max(0,-l)||0)),v&&it(c(a),v),a}var n=t.prototype;return n.render=function(e,t,n){var r=this._time,i=this._tDur,a=this._dur,o=e<0,s=e>i-g&&!o?i:e<g?0:e,c,l,u,d,f,p,m,h;if(!a)ct(this,e,t,n);else if(s!==this._tTime||!e||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==o||this._lazy){if(c=s,h=this.timeline,this._repeat){if(d=a+this._rDelay,this._repeat<-1&&o)return this.totalTime(d*100+e,t,n);if(c=ke(s%d),s===i?(u=this._repeat,c=a):(f=ke(s/d),u=~~f,u&&u===f?(c=a,u--):c>a&&(c=a)),p=this._yoyo&&u&1,p&&(c=a-c),f=Qe(this._tTime,d),c===r&&!n&&this._initted&&u===f)return this._tTime=s,this;u!==f&&this.vars.repeatRefresh&&!p&&!this._lock&&c!==d&&this._initted&&(this._lock=n=1,this.render(ke(d*u),!0).invalidate()._lock=0)}if(!this._initted){if(at(this,o?e:c,n,t,s))return this._tTime=0,this;if(r!==this._time&&!(n&&this.vars.repeatRefresh&&u!==f))return this;if(a!==this._dur)return this.render(e,t,n)}if(this._rEase){var _=c<r;if(_!==this._inv){var v=_?r:a-r;this._inv=_,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=r,this._invRecip=v?(_?-1:1)/v:0,this._invScale=_?-this.ratio:1-this.ratio,this._invEase=_?this._rEase:this._ease}this.ratio=m=this._invRatio+this._invScale*this._invEase((c-this._invTime)*this._invRecip)}else this.ratio=m=this._ease(c/a);if(this._from&&(this.ratio=m=1-m),this._tTime=s,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),!r&&s&&!t&&!f&&(zt(this,`onStart`),this._tTime!==s))return this;for(l=this._pt;l;)l.r(m,l.d),l=l._next;h&&h.render(e<0?e:h._dur*h._ease(c/this._dur),t,n)||this._startAt&&(this._zTime=e),this._onUpdate&&!t&&(o&&Ye(this,e,t,n),zt(this,`onUpdate`)),this._repeat&&u!==f&&this.vars.onRepeat&&!t&&this.parent&&zt(this,`onRepeat`),s!==this._tDur&&s||this._tTime!==s||(o&&!this._onUpdate&&Ye(this,e,!0,!0),(e||!a)&&(s===this._tDur&&this._ts>0||!s&&this._ts<0)&&Ke(this,1),!t&&(!o||r)&&(s||r||p)&&(zt(this,s===i?`onComplete`:`onReverseComplete`,!0),this._prom&&!(s<i&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),e.prototype.invalidate.call(this,t)},n.resetTo=function(e,t,n,r,i){$t||en.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),o;return this._initted||wn(this,a),o=this._ease(a/this._dur),Tn(this,e,t,n,r,o,a,i)?this.resetTo(e,t,n,r,1):(tt(this,0),this.parent||We(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},n.kill=function(e,t){if(t===void 0&&(t=`all`),!e&&(!t||t===`all`))return this._lazy=this._pt=0,this.parent?Bt(this):this.scrollTrigger&&this.scrollTrigger.kill(!!p),this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(e,t,Sn&&Sn.vars.overwrite!==!0)._first||Bt(this),this.parent&&n!==this.timeline.totalDuration()&&ut(this,this._dur*this.timeline._tDur/n,0,1),this}var r=this._targets,i=e?St(e):r,a=this._ptLookup,o=this._pt,s,c,l,u,d,f,m;if((!t||t===`all`)&&Ue(r,i))return t===`all`&&(this._pt=0),Bt(this);for(s=this._op=this._op||[],t!==`all`&&(C(t)&&(d={},De(t,function(e){return d[e]=1}),t=d),t=En(r,t)),m=r.length;m--;)if(~i.indexOf(r[m]))for(d in c=a[m],t===`all`?(s[m]=t,u=c,l={}):(l=s[m]=s[m]||{},u=t),u)f=c&&c[d],f&&(`kill`in f.d&&f.d.kill(d)!==!0||Ge(this,f,`_pt`),delete c[d]),l!==`all`&&(l[d]=1);return this._initted&&!this._pt&&o&&Bt(this),this},t.to=function(e,n){return new t(e,n,arguments[2])},t.from=function(e,t){return mt(1,arguments)},t.delayedCall=function(e,n,r,i){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:e,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},t.fromTo=function(e,t,n){return mt(2,arguments)},t.set=function(e,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(e,n)},t.killTweensOf=function(e,t,n){return L.killTweensOf(e,t,n)},t}(gn);Le(jn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),De(`staggerTo,staggerFrom,staggerFromTo`,function(e){jn[e]=function(){var t=new _n,n=yt.call(arguments,0);return n.splice(e===`staggerFromTo`?5:4,0,0),t[e].apply(t,n)}});var Mn=function(e,t,n){return e[t]=n},Nn=function(e,t,n){return e[t](n)},Pn=function(e,t,n,r){return e[t](r.fp,n)},Fn=function(e,t,n){return e.setAttribute(t,n)},In=function(e,t){return w(e[t])?Nn:E(e[t])&&e.setAttribute?Fn:Mn},Ln=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Rn=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},zn=function(e,t){var n=t._pt,r=``;if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Bn=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Vn=function(e,t,n,r){for(var i=this._pt,a;i;)a=i._next,i.p===r&&i.modifier(e,t,n),i=a},Hn=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Ge(this,t,`_pt`):t.dep||(n=1),t=r;return!n},Un=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Wn=function(e){for(var t=e._pt,n,r,i,a;t;){for(n=t._next,r=i;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:i=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=i},Gn=function(){function e(e,t,n,r,i,a,o,s,c){this.t=t,this.s=r,this.c=i,this.p=n,this.r=a||Ln,this.d=o||this,this.set=s||Mn,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=e.prototype;return t.modifier=function(e,t,n){this.mSet=this.mSet||this.set,this.set=Un,this.m=e,this.mt=n,this.tween=t},e}();De(B+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(e){return ye[e]=1}),ce.TweenMax=ce.TweenLite=jn,ce.TimelineLite=ce.TimelineMax=_n,L=new _n({sortChildren:!1,defaults:d,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0}),u.stringFilter=Qt;var Kn=[],qn={},Jn=[],Yn=0,Xn=0,Zn=function(e){return(qn[e]||Jn).map(function(e){return e()})},Qn=function(){var e=Date.now(),t=[];e-Yn>2&&(Zn(`matchMediaInit`),Kn.forEach(function(e){var n=e.queries,r=e.conditions,i,a,o,s;for(a in n)i=ae.matchMedia(n[a]).matches,i&&(o=1),i!==r[a]&&(r[a]=i,s=1);s&&(e.revert(),o&&t.push(e))}),Zn(`matchMediaRevert`),t.forEach(function(e){return e.onMatch(e,function(t){return e.add(null,t)})}),Yn=e,Zn(`matchMedia`))},$n=function(){function e(e,t){this.selector=t&&Ct(t),this.data=[],this._r=[],this.isReverted=!1,this.id=Xn++,e&&this.add(e)}var t=e.prototype;return t.add=function(e,t,n){w(e)&&(n=t,t=e,e=w);var r=this,i=function(){var e=m,i=r.selector,a;return e&&e!==r&&e.data.push(r),n&&(r.selector=Ct(n)),m=r,a=t.apply(r,arguments),w(a)&&r._r.push(a),m=e,r.selector=i,r.isReverted=!1,a};return r.last=i,e===w?i(r,function(e){return r.add(null,e)}):e?r[e]=i:i},t.ignore=function(e){var t=m;m=null,e(this),m=t},t.getTweens=function(){var t=[];return this.data.forEach(function(n){return n instanceof e?t.push.apply(t,n.getTweens()):n instanceof jn&&!(n.parent&&n.parent.data===`nested`)&&t.push(n)}),t},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,t){var n=this;if(e?(function(){for(var t=n.getTweens(),r=n.data.length,i;r--;)i=n.data[r],i.data===`isFlip`&&(i.revert(),i.getChildren(!0,!0,!1).forEach(function(e){return t.splice(t.indexOf(e),1)}));for(t.map(function(e){return{g:e._dur||e._delay||e._sat&&!e._sat.vars.immediateRender?e.globalTime(0):-1/0,t:e}}).sort(function(e,t){return t.g-e.g||-1/0}).forEach(function(t){return t.t.revert(e)}),r=n.data.length;r--;)i=n.data[r],i instanceof _n?i.data!==`nested`&&(i.scrollTrigger&&i.scrollTrigger.revert(),i.kill()):!(i instanceof jn)&&i.revert&&i.revert(e);n._r.forEach(function(t){return t(e,n)}),n.isReverted=!0})():this.data.forEach(function(e){return e.kill&&e.kill()}),this.clear(),t){for(var r=Kn.length;r--;)Kn[r].id===this.id&&Kn.splice(r,1);this._mqs&&this._mqs.forEach(function(e){return e.removeListener?e.removeListener(Qn):e.removeEventListener(`change`,Qn)}),this._mqs=null}},t.revert=function(e){this.kill(e||{})},e}(),er=function(){function e(e){this.contexts=[],this.scope=e,m&&m.data.push(this)}var t=e.prototype;return t.add=function(e,t,n){D(e)||(e={matches:e});var r=new $n(0,n||this.scope),i=r.conditions={},a,o,s;for(o in m&&!r.selector&&(r.selector=m.selector),this.contexts.push(r),t=r.add(`onMatch`,t),r.queries=e,e)o===`all`?s=1:(a=ae.matchMedia(e[o]),a&&(Kn.indexOf(r)<0&&Kn.push(r),(i[o]=a.matches)&&(s=1),a.addListener?a.addListener(Qn):a.addEventListener(`change`,Qn),(r._mqs||(r._mqs=[])).push(a)));return s&&t(r,function(e){return r.add(null,e)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},e}(),tr={registerPlugin:function(){[...arguments].forEach(function(e){return Ut(e)})},timeline:function(e){return new _n(e)},getTweensOf:function(e,t){return L.getTweensOf(e,t)},getProperty:function(e,t,n,r){C(e)&&(e=St(e)[0]);var i=Te(e||{}).get,a=n?Ie:Fe;return n===`native`&&(n=``),e&&(t?a((Se[t]&&Se[t].get||i)(e,t,n,r)):function(t,n,r){return a((Se[t]&&Se[t].get||i)(e,t,n,r))})},quickSetter:function(e,t,n){if(e=St(e),e.length>1){var r=e.map(function(e){return ar.quickSetter(e,t,n)}),i=r.length;return function(e){for(var t=i;t--;)r[t](e)}}e=e[0]||{};var a=Se[t],o=Te(e),s=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(t){var r=new a;Vt._pt=0,r.init(e,n?t+n:t,Vt,0,[e]),r.render(1,r),Vt._pt&&Bn(1,Vt)}:o.set(e,s);return a?c:function(t){return c(e,s,n?t+n:t,o,1)}},quickTo:function(e,t,n){var r,i=ar.to(e,Le((r={},r[t]=`+=0.1`,r.paused=!0,r.stagger=0,r),n||{})),a=function(e,n,r){return i.resetTo(t,e,n,r)};return a.tween=i,a},isTweening:function(e){return L.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=un(e.ease,d.ease)),Be(d,e||{})},config:function(e){return Be(u,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,i=e.defaults,a=e.extendTimeline;(r||``).split(`,`).forEach(function(e){return e&&!Se[e]&&!ce[e]&&pe(t+` effect requires `+e+` plugin.`)}),Ce[t]=function(e,t,r){return n(St(e),Le(t||{},i),r)},a&&(_n.prototype[t]=function(e,n,r){return this.add(Ce[t](e,D(n)?n:(r=n)&&{},this),r)})},registerEase:function(e,t){nn[e]=un(t)},parseEase:function(e,t){return arguments.length?un(e,t):nn},getById:function(e){return L.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new _n(e),r,i;for(n.smoothChildTiming=O(e.smoothChildTiming),L.remove(n),n._dp=0,n._time=n._tTime=L._time,r=L._first;r;)i=r._next,(t||!(!r._dur&&r instanceof jn&&r.vars.onComplete===r._targets[0]))&&rt(n,r,r._start-r._delay),r=i;return rt(L,n,0),n},context:function(e,t){return e?new $n(e,t):m},matchMedia:function(e){return new er(e)},matchMediaRefresh:function(){return Kn.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Qn()},addEventListener:function(e,t){var n=qn[e]||(qn[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=qn[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Nt,wrapYoyo:Pt,distribute:Tt,random:Ot,snap:Dt,normalize:jt,getUnit:_t,clamp:vt,splitColor:qt,toArray:St,selector:Ct,mapRange:It,pipe:kt,unitize:At,interpolate:Lt,shuffle:wt},install:de,effects:Ce,ticker:en,updateRoot:_n.updateRoot,plugins:Se,globalTimeline:L,core:{PropTween:Gn,globals:me,Tween:jn,Timeline:_n,Animation:gn,getCache:Te,_removeLinkedListItem:Ge,reverting:function(){return p},context:function(e){return e&&m&&(m.data.push(e),e._ctx=m),m},suppressOverwrites:function(e){return f=e}}};De(`to,from,fromTo,delayedCall,set,killTweensOf`,function(e){return tr[e]=jn[e]}),en.add(_n.updateRoot),Vt=tr.to({},{duration:0});var nr=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},rr=function(e,t){var n=e._targets,r,i,a;for(r in t)for(i=n.length;i--;)a=e._ptLookup[i][r],a&&(a=a.d)&&(a._pt&&(a=nr(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[i],r))},ir=function(e,t){return{name:e,headless:1,rawVars:1,init:function(e,n,r){r._onInit=function(e){var r,i;if(C(n)&&(r={},De(n,function(e){return r[e]=1}),n=r),t){for(i in r={},n)r[i]=t(n[i]);n=r}rr(e,n)}}}},ar=tr.registerPlugin({name:`attr`,init:function(e,t,n,r,i){var a,o,s;for(a in this.tween=n,t)s=e.getAttribute(a)||``,o=this.add(e,`setAttribute`,(s||0)+``,t[a],r,i,0,0,a),o.op=a,o.b=s,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)p?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ir(`roundProps`,Et),ir(`modifiers`),ir(`snap`,Dt))||tr;jn.version=_n.version=ar.version=`3.15.1`,ue=1,k()&&tn(),nn.Power0,nn.Power1,nn.Power2,nn.Power3,nn.Power4,nn.Linear,nn.Quad,nn.Cubic,nn.Quart,nn.Quint,nn.Strong,nn.Elastic,nn.Back,nn.SteppedEase,nn.Bounce,nn.Sine,nn.Expo,nn.Circ;var or,sr,cr,lr,ur,dr,fr,pr=function(){return typeof window<`u`},mr={},hr=180/Math.PI,gr=Math.PI/180,_r=Math.atan2,vr=1e8,yr=/([A-Z])/g,br=/(left|right|width|margin|padding|x)/i,xr=/[\s,\(]\S/,Sr={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`},Cr=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wr=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tr=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Er=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Dr=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Or=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},kr=function(e,t){return t.set(t.t,t.p,e===1?t.e:t.b,t)},Ar=function(e,t,n){return e.style[t]=n},jr=function(e,t,n){return e.style.setProperty(t,n)},Mr=function(e,t,n){return e._gsap[t]=n},Nr=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Pr=function(e,t,n,r,i){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(i,a)},Fr=function(e,t,n,r,i){var a=e._gsap;a[t]=n,a.renderTransform(i,a)},Ir=`transform`,Lr=Ir+`Origin`,Rr=function e(t,n){var r=this,i=this.target,a=i.style,o=i._gsap;if(t in mr&&a){if(this.tfm=this.tfm||{},t!==`transform`)t=Sr[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(e){return r.tfm[e]=ri(i,e)}):this.tfm[t]=o.x?o[t]:ri(i,t),t===Lr&&(this.tfm.zOrigin=o.zOrigin);else return Sr.transform.split(`,`).forEach(function(t){return e.call(r,t,n)});if(this.props.indexOf(Ir)>=0)return;o.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(Lr,n,``)),t=Ir}(a||n)&&this.props.push(t,n,a[t])},zr=function(e){e.translate&&(e.removeProperty(`translate`),e.removeProperty(`scale`),e.removeProperty(`rotate`))},Br=function(){for(var e=this.props,t=this.target,n=t.style,r=t._gsap,i=0,a;i<e.length;i+=3)e[i+1]?e[i+1]===2?t[e[i]](e[i+2]):t[e[i]]=e[i+2]:e[i+2]?n[e[i]]=e[i+2]:n.removeProperty(e[i].substr(0,2)===`--`?e[i]:e[i].replace(yr,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute(`data-svg-origin`,this.svgo||``)),i=fr(),i&&i.isStart||n[Ir]||(zr(n),r.zOrigin&&n[Lr]&&(n[Lr]+=` `+r.zOrigin+`px`,r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Vr=function(e,t){var n={target:e,props:[],revert:Br,save:Rr};return e._gsap||ar.core.getCache(e),t&&e.style&&e.nodeType&&t.split(`,`).forEach(function(e){return n.save(e)}),n},Hr,Ur=function(e,t){var n=sr.createElementNS?sr.createElementNS((t||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),e):sr.createElement(e);return n&&n.style?n:sr.createElement(e)},Wr=function e(t,n,r){var i=getComputedStyle(t);return i[n]||i.getPropertyValue(n.replace(yr,`-$1`).toLowerCase())||i.getPropertyValue(n)||!r&&e(t,Kr(n)||n,1)||``},Gr=`O,Moz,ms,Ms,Webkit`.split(`,`),Kr=function(e,t,n){var r=(t||ur).style,i=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);i--&&!(Gr[i]+e in r););return i<0?null:(i===3?`ms`:i>=0?Gr[i]:``)+e},qr=function(){pr()&&window.document&&(or=window,sr=or.document,cr=sr.documentElement,ur=Ur(`div`)||{style:{}},Ur(`div`),Ir=Kr(Ir),Lr=Ir+`Origin`,ur.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Hr=!!Kr(`perspective`),fr=ar.core.reverting,lr=1)},Jr=function(e){var t=e.ownerSVGElement,n=Ur(`svg`,t&&t.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),r=e.cloneNode(!0),i;r.style.display=`block`,n.appendChild(r),cr.appendChild(n);try{i=r.getBBox()}catch{}return n.removeChild(r),cr.removeChild(n),i},Yr=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Xr=function(e){var t,n;try{t=e.getBBox()}catch{t=Jr(e),n=1}return t&&(t.width||t.height)||n||(t=Jr(e)),t&&!t.width&&!t.x&&!t.y?{x:+Yr(e,[`x`,`cx`,`x1`])||0,y:+Yr(e,[`y`,`cy`,`y1`])||0,width:0,height:0}:t},Zr=function(e){return!(!e.getCTM||e.parentNode&&!e.ownerSVGElement||!Xr(e))},Qr=function(e,t){if(t){var n=e.style,r;t in mr&&t!==Lr&&(t=Ir),n.removeProperty?(r=t.substr(0,2),(r===`ms`||t.substr(0,6)===`webkit`)&&(t=`-`+t),n.removeProperty(r===`--`?t:t.replace(yr,`-$1`).toLowerCase())):n.removeAttribute(t)}},$r=function(e,t,n,r,i,a){var o=new Gn(e._pt,t,n,0,1,a?kr:Or);return e._pt=o,o.b=r,o.e=i,e._props.push(n),o},ei={deg:1,rad:1,turn:1},ti={grid:1,flex:1},ni=function e(t,n,r,i){var a=parseFloat(r)||0,o=(r+``).trim().substr((a+``).length)||`px`,s=ur.style,c=br.test(n),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,f=i===`px`,p=i===`%`,m,h,g,_;if(i===o||!a||ei[i]||ei[o])return a;if(o!==`px`&&!f&&(a=e(t,n,r,`px`)),_=t.getCTM&&Zr(t),(p||o===`%`)&&(mr[n]||~n.indexOf(`adius`)))return m=_?t.getBBox()[c?`width`:`height`]:t[u],Oe(p?a/m*d:a/100*m);if(s[c?`width`:`height`]=d+(f?o:i),h=i!==`rem`&&~n.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,_&&(h=(t.ownerSVGElement||{}).parentNode),h&&h!==sr&&h.appendChild||(h=sr.body),g=h._gsap,g&&p&&g.width&&c&&g.time===en.time&&!g.uncache)return Oe(a/g.width*d);if(p&&(n===`height`||n===`width`)){var v=t.style[n];t.style[n]=d+i,m=t[u],v?t.style[n]=v:Qr(t,n)}else(p||o===`%`)&&!ti[Wr(h,`display`)]&&(s.position=Wr(t,`position`)),h===t&&(s.position=`static`),h.appendChild(ur),m=ur[u],h.removeChild(ur),s.position=`absolute`;return c&&p&&(g=Te(h),g.time=en.time,g.width=h[u]),Oe(f?m*a/d:m&&a?d/m*a:0)},ri=function(e,t,n,r){var i;return lr||qr(),t in Sr&&t!==`transform`&&(t=Sr[t],~t.indexOf(`,`)&&(t=t.split(`,`)[0])),mr[t]&&t!==`transform`?(i=hi(e,r),i=t===`transformOrigin`?i.svg?i.origin:gi(Wr(e,Lr))+` `+i.zOrigin+`px`:i[t]):(i=e.style[t],(!i||i===`auto`||r||~(i+``).indexOf(`calc(`))&&(i=ci[t]&&ci[t](e,t,n)||Wr(e,t)||Ee(e,t)||+(t===`opacity`))),n&&!~(i+``).trim().indexOf(` `)?ni(e,t,i,n)+n:i},ii=function(e,t,n,r){if(!n||n===`none`){var i=Kr(t,e,1),a=i&&Wr(e,i,1);a&&a!==n?(t=i,n=a):t===`borderColor`&&(n=Wr(e,`borderTopColor`))}var o=new Gn(this._pt,e.style,t,0,1,zn),s=0,c=0,l,d,f,p,m,h,g,_,v,y,b,x;if(o.b=n,o.e=r,n+=``,r+=``,r.substring(0,6)===`var(--`&&(r=Wr(e,r.substring(4,r.indexOf(`)`)))),r===`auto`&&(h=e.style[t],e.style[t]=r,r=Wr(e,t)||r,h?e.style[t]=h:Qr(e,t)),l=[n,r],Qt(l),n=l[0],r=l[1],f=n.match(ee)||[],x=r.match(ee)||[],x.length){for(;d=ee.exec(r);)g=d[0],v=r.substring(s,d.index),m?m=(m+1)%5:(v.substr(-5)===`rgba(`||v.substr(-5)===`hsla(`)&&(m=1),g!==(h=f[c++]||``)&&(p=parseFloat(h)||0,b=h.substr((p+``).length),g.charAt(1)===`=`&&(g=Ae(p,g)+b),_=parseFloat(g),y=g.substr((_+``).length),s=ee.lastIndex-y.length,y||(y=y||u.units[t]||b,s===r.length&&(r+=y,o.e+=y)),b!==y&&(p=ni(e,t,h,y)||0),o._pt={_next:o._pt,p:v||c===1?v:`,`,s:p,c:_-p,m:m&&m<4||t===`zIndex`?Math.round:0});o.c=s<r.length?r.substring(s,r.length):``}else o.r=t===`display`&&r===`none`?kr:Or;return ne.test(r)&&(o.e=0),this._pt=o,o},ai={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`},oi=function(e){var t=e.split(` `),n=t[0],r=t[1]||`50%`;return(n===`top`||n===`bottom`||r===`left`||r===`right`)&&(e=n,n=r,r=e),t[0]=ai[n]||n,t[1]=ai[r]||r,t.join(` `)},si=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,i=t.u,a=n._gsap,o,s,c;if(i===`all`||i===!0)r.cssText=``,s=1;else for(i=i.split(`,`),c=i.length;--c>-1;)o=i[c],mr[o]&&(s=1,o=o===`transformOrigin`?Lr:Ir),Qr(n,o);s&&(Qr(n,Ir),a&&(a.svg&&n.removeAttribute(`transform`),r.scale=r.rotate=r.translate=`none`,hi(n,1),a.uncache=1,zr(r)))}},ci={clearProps:function(e,t,n,r,i){if(i.data!==`isFromStart`){var a=e._pt=new Gn(e._pt,t,n,0,0,si);return a.u=r,a.pr=-10,a.tween=i,e._props.push(n),1}}},li=[1,0,0,1,0,0],ui={},di=function(e){return e===`matrix(1, 0, 0, 1, 0, 0)`||e===`none`||!e},fi=function(e){var t=Wr(e,Ir);return di(t)?li:t.substr(7).match(I).map(Oe)},pi=function(e,t){var n=e._gsap||Te(e),r=e.style,i=fi(e),a,o,s,c;return n.svg&&e.getAttribute(`transform`)?(s=e.transform.baseVal.consolidate().matrix,i=[s.a,s.b,s.c,s.d,s.e,s.f],i.join(`,`)===`1,0,0,1,0,0`?li:i):(i===li&&!e.offsetParent&&e!==cr&&!n.svg&&(s=r.display,r.display=`block`,a=e.parentNode,a&&(e.offsetParent||e.getBoundingClientRect().width)||(c=1,o=e.nextElementSibling,cr.appendChild(e)),i=fi(e),s?r.display=s:Qr(e,`display`),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):cr.removeChild(e))),t&&i.length>6?[i[0],i[1],i[4],i[5],i[12],i[13]]:i)},mi=function(e,t,n,r,i,a){var o=e._gsap,s=i||pi(e,!0),c=o.xOrigin||0,l=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,f=s[0],p=s[1],m=s[2],h=s[3],g=s[4],_=s[5],v=t.split(` `),y=parseFloat(v[0])||0,b=parseFloat(v[1])||0,x,S,C,w;n?s!==li&&(S=f*h-p*m)&&(C=h/S*y+b*(-m/S)+(m*_-h*g)/S,w=y*(-p/S)+f/S*b-(f*_-p*g)/S,y=C,b=w):(x=Xr(e),y=x.x+(~v[0].indexOf(`%`)?y/100*x.width:y),b=x.y+(~(v[1]||v[0]).indexOf(`%`)?b/100*x.height:b)),r||r!==!1&&o.smooth?(g=y-c,_=b-l,o.xOffset=u+(g*f+_*m)-g,o.yOffset=d+(g*p+_*h)-_):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=b,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Lr]=`0px 0px`,a&&($r(a,o,`xOrigin`,c,y),$r(a,o,`yOrigin`,l,b),$r(a,o,`xOffset`,u,o.xOffset),$r(a,o,`yOffset`,d,o.yOffset)),e.setAttribute(`data-svg-origin`,y+` `+b)},hi=function(e,t){var n=e._gsap||new hn(e);if(`x`in n&&!t&&!n.uncache)return n;var r=e.style,i=n.scaleX<0,a=`px`,o=`deg`,s=getComputedStyle(e),c=Wr(e,Lr)||`0`,l=d=f=h=g=_=v=y=b=0,d,f,p=m=1,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,ee,te,ne,re,ie;return n.svg=!!(e.getCTM&&Zr(e)),s.translate&&((s.translate!==`none`||s.scale!==`none`||s.rotate!==`none`)&&(r[Ir]=(s.translate===`none`?``:`translate3d(`+(s.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `)+(s.rotate===`none`?``:`rotate(`+s.rotate+`) `)+(s.scale===`none`?``:`scale(`+s.scale.split(` `).join(`,`)+`) `)+(s[Ir]===`none`?``:s[Ir])),r.scale=r.rotate=r.translate=`none`),C=pi(e,n.svg),n.svg&&(n.uncache?(P=e.getBBox(),c=n.xOrigin-P.x+`px `+(n.yOrigin-P.y)+`px`,N=``):N=!t&&e.getAttribute(`data-svg-origin`),mi(e,N||c,!!N||n.originIsAbsolute,n.smooth!==!1,C)),x=n.xOrigin||0,S=n.yOrigin||0,C!==li&&(D=C[0],O=C[1],k=C[2],A=C[3],l=j=C[4],d=M=C[5],C.length===6?(p=Math.sqrt(D*D+O*O),m=Math.sqrt(A*A+k*k),h=D||O?_r(O,D)*hr:0,v=k||A?_r(k,A)*hr+h:0,v&&(m*=Math.abs(Math.cos(v*gr))),n.svg&&(l-=x-(x*D+S*k),d-=S-(x*O+S*A))):(ie=C[6],ne=C[7],I=C[8],ee=C[9],te=C[10],re=C[11],l=C[12],d=C[13],f=C[14],w=_r(ie,te),g=w*hr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=j*T+I*E,P=M*T+ee*E,F=ie*T+te*E,I=j*-E+I*T,ee=M*-E+ee*T,te=ie*-E+te*T,re=ne*-E+re*T,j=N,M=P,ie=F),w=_r(-k,te),_=w*hr,w&&(T=Math.cos(-w),E=Math.sin(-w),N=D*T-I*E,P=O*T-ee*E,F=k*T-te*E,re=A*E+re*T,D=N,O=P,k=F),w=_r(O,D),h=w*hr,w&&(T=Math.cos(w),E=Math.sin(w),N=D*T+O*E,P=j*T+M*E,O=O*T-D*E,M=M*T-j*E,D=N,j=P),g&&Math.abs(g)+Math.abs(h)>359.9&&(g=h=0,_=180-_),p=Oe(Math.sqrt(D*D+O*O+k*k)),m=Oe(Math.sqrt(M*M+ie*ie)),w=_r(j,M),v=Math.abs(w)>2e-4?w*hr:0,b=re?1/(re<0?-re:re):0),n.svg&&(N=e.getAttribute(`transform`),n.forceCSS=e.setAttribute(`transform`,``)||!di(Wr(e,Ir)),N&&e.setAttribute(`transform`,N))),Math.abs(v)>90&&Math.abs(v)<270&&(i?(p*=-1,v+=h<=0?180:-180,h+=h<=0?180:-180):(m*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=l-((n.xPercent=l&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-l)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Oe(p),n.scaleY=Oe(m),n.rotation=Oe(h)+o,n.rotationX=Oe(g)+o,n.rotationY=Oe(_)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(` `)[2])||!t&&n.zOrigin||0)&&(r[Lr]=gi(c)),n.xOffset=n.yOffset=0,n.force3D=u.force3D,n.renderTransform=n.svg?Ci:Hr?Si:vi,n.uncache=0,n},gi=function(e){return(e=e.split(` `))[0]+` `+e[1]},_i=function(e,t,n){var r=_t(t);return Oe(parseFloat(t)+parseFloat(ni(e,`x`,n+`px`,r)))+r},vi=function(e,t){t.z=`0px`,t.rotationY=t.rotationX=`0deg`,t.force3D=0,Si(e,t)},yi=`0deg`,bi=`0px`,xi=`) `,Si=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.z,c=n.rotation,l=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,p=n.scaleX,m=n.scaleY,h=n.transformPerspective,g=n.force3D,_=n.target,v=n.zOrigin,y=``,b=g===`auto`&&e&&e!==1||g===!0;if(v&&(u!==yi||l!==yi)){var x=parseFloat(l)*gr,S=Math.sin(x),C=Math.cos(x),w;x=parseFloat(u)*gr,w=Math.cos(x),a=_i(_,a,S*w*-v),o=_i(_,o,-Math.sin(x)*-v),s=_i(_,s,C*w*-v+v)}h!==bi&&(y+=`perspective(`+h+xi),(r||i)&&(y+=`translate(`+r+`%, `+i+`%) `),(b||a!==bi||o!==bi||s!==bi)&&(y+=s!==bi||b?`translate3d(`+a+`, `+o+`, `+s+`) `:`translate(`+a+`, `+o+xi),c!==yi&&(y+=`rotate(`+c+xi),l!==yi&&(y+=`rotateY(`+l+xi),u!==yi&&(y+=`rotateX(`+u+xi),(d!==yi||f!==yi)&&(y+=`skew(`+d+`, `+f+xi),(p!==1||m!==1)&&(y+=`scale(`+p+`, `+m+xi),_.style[Ir]=y||`translate(0, 0)`},Ci=function(e,t){var n=t||this,r=n.xPercent,i=n.yPercent,a=n.x,o=n.y,s=n.rotation,c=n.skewX,l=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,p=n.xOrigin,m=n.yOrigin,h=n.xOffset,g=n.yOffset,_=n.forceCSS,v=parseFloat(a),y=parseFloat(o),b,x,S,C,w;s=parseFloat(s),c=parseFloat(c),l=parseFloat(l),l&&(l=parseFloat(l),c+=l,s+=l),s||c?(s*=gr,c*=gr,b=Math.cos(s)*u,x=Math.sin(s)*u,S=Math.sin(s-c)*-d,C=Math.cos(s-c)*d,c&&(l*=gr,w=Math.tan(c-l),w=Math.sqrt(1+w*w),S*=w,C*=w,l&&(w=Math.tan(l),w=Math.sqrt(1+w*w),b*=w,x*=w)),b=Oe(b),x=Oe(x),S=Oe(S),C=Oe(C)):(b=u,C=d,x=S=0),(v&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(v=ni(f,`x`,a,`px`),y=ni(f,`y`,o,`px`)),(p||m||h||g)&&(v=Oe(v+p-(p*b+m*S)+h),y=Oe(y+m-(p*x+m*C)+g)),(r||i)&&(w=f.getBBox(),v=Oe(v+r/100*w.width),y=Oe(y+i/100*w.height)),w=`matrix(`+b+`,`+x+`,`+S+`,`+C+`,`+v+`,`+y+`)`,f.setAttribute(`transform`,w),_&&(f.style[Ir]=w)},wi=function(e,t,n,r,i){var a=360,o=C(i),s=parseFloat(i)*(o&&~i.indexOf(`rad`)?hr:1)-r,c=r+s+`deg`,l,u;return o&&(l=i.split(`_`)[1],l===`short`&&(s%=a,s!==s%(a/2)&&(s+=s<0?a:-a)),l===`cw`&&s<0?s=(s+a*vr)%a-~~(s/a)*a:l===`ccw`&&s>0&&(s=(s-a*vr)%a-~~(s/a)*a)),e._pt=u=new Gn(e._pt,t,n,r,s,wr),u.e=c,u.u=`deg`,e._props.push(n),u},Ti=function(e,t){for(var n in t)e[n]=t[n];return e},Ei=function(e,t,n){var r=Ti({},n._gsap),i=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,s,c,l,u,d,f,p;for(s in r.svg?(c=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Ir]=t,o=hi(n,1),Qr(n,Ir),n.setAttribute(`transform`,c)):(c=getComputedStyle(n)[Ir],a[Ir]=t,o=hi(n,1),a[Ir]=c),mr)c=r[s],l=o[s],c!==l&&i.indexOf(s)<0&&(f=_t(c),p=_t(l),u=f===p?parseFloat(c):ni(n,s,c,p),d=parseFloat(l),e._pt=new Gn(e._pt,o,s,u,d-u,Cr),e._pt.u=p||0,e._props.push(s));Ti(o,r)};De(`padding,margin,Width,Radius`,function(e,t){var n=`Top`,r=`Right`,i=`Bottom`,a=`Left`,o=(t<3?[n,r,i,a]:[n+a,n+r,i+r,i+a]).map(function(n){return t<2?e+n:`border`+n+e});ci[t>1?`border`+e:e]=function(e,t,n,r,i){var a,s;if(arguments.length<4)return a=o.map(function(t){return ri(e,t,n)}),s=a.join(` `),s.split(a[0]).length===5?a[0]:s;a=(r+``).split(` `),s={},o.forEach(function(e,t){return s[e]=a[t]=a[t]||a[(t-1)/2|0]}),e.init(t,s,i)}});var Di={name:`css`,register:qr,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,i){var a=this._props,o=e.style,s=n.vars.startAt,c,l,d,f,p,m,h,g,_,v,y,b,x,S,w,T,E;for(h in lr||qr(),this.styles=this.styles||Vr(e),T=this.styles.props,this.tween=n,t)if(h!==`autoRound`&&(l=t[h],!(Se[h]&&xn(h,t,n,r,e,i)))){if(p=typeof l,m=ci[h],p===`function`&&(l=l.call(n,r,e,i),p=typeof l),p===`string`&&~l.indexOf(`random(`)&&(l=Ft(l)),m)m(this,e,h,l,n)&&(w=1);else if(h.substr(0,2)===`--`)c=(getComputedStyle(e).getPropertyValue(h)+``).trim(),l+=``,Xt.lastIndex=0,Xt.test(c)||(g=_t(c),_=_t(l),_?g!==_&&(c=ni(e,h,c,_)+_):g&&(l+=g)),this.add(o,`setProperty`,c,l,r,i,0,0,h),a.push(h),T.push(h,0,o[h]);else if(p!==`undefined`){if(s&&h in s?(c=typeof s[h]==`function`?s[h].call(n,r,e,i):s[h],C(c)&&~c.indexOf(`random(`)&&(c=Ft(c)),_t(c+``)||c===`auto`||(c+=u.units[h]||_t(ri(e,h))||``),(c+``).charAt(1)===`=`&&(c=ri(e,h))):c=ri(e,h),f=parseFloat(c),v=p===`string`&&l.charAt(1)===`=`&&l.substr(0,2),v&&(l=l.substr(2)),d=parseFloat(l),h in Sr&&(h===`autoAlpha`&&(f===1&&ri(e,`visibility`)===`hidden`&&d&&(f=0),T.push(`visibility`,0,o.visibility),$r(this,o,`visibility`,f?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),h!==`scale`&&h!==`transform`&&(h=Sr[h],~h.indexOf(`,`)&&(h=h.split(`,`)[0]))),y=h in mr,y){if(this.styles.save(h),E=l,p===`string`&&l.substring(0,6)===`var(--`){if(l=Wr(e,l.substring(4,l.indexOf(`)`))),l.substring(0,5)===`calc(`){var D=e.style.perspective;e.style.perspective=l,l=Wr(e,`perspective`),D?e.style.perspective=D:Qr(e,`perspective`)}d=parseFloat(l)}if(b||(x=e._gsap,x.renderTransform&&!t.parseTransform||hi(e,t.parseTransform),S=t.smoothOrigin!==!1&&x.smooth,b=this._pt=new Gn(this._pt,o,Ir,0,1,x.renderTransform,x,0,-1),b.dep=1),h===`scale`)this._pt=new Gn(this._pt,x,`scaleY`,x.scaleY,(v?Ae(x.scaleY,v+d):d)-x.scaleY||0,Cr),this._pt.u=0,a.push(`scaleY`,h),h+=`X`;else if(h===`transformOrigin`){T.push(Lr,0,o[Lr]),l=oi(l),x.svg?mi(e,l,0,S,0,this):(_=parseFloat(l.split(` `)[2])||0,_!==x.zOrigin&&$r(this,x,`zOrigin`,x.zOrigin,_),$r(this,o,h,gi(c),gi(l)));continue}else if(h===`svgOrigin`){mi(e,l,1,S,0,this);continue}else if(h in ui){wi(this,x,h,f,v?Ae(f,v+l):l);continue}else if(h===`smoothOrigin`){$r(this,x,`smooth`,x.smooth,l);continue}else if(h===`force3D`){x[h]=l;continue}else if(h===`transform`){Ei(this,l,e);continue}}else h in o||(h=Kr(h)||h);if(y||(d||d===0)&&(f||f===0)&&!xr.test(l)&&h in o)g=(c+``).substr((f+``).length),d||(d=0),_=_t(l)||(h in u.units?u.units[h]:g),g!==_&&(f=ni(e,h,c,_)),this._pt=new Gn(this._pt,y?x:o,h,f,(v?Ae(f,v+d):d)-f,!y&&(_===`px`||h===`zIndex`)&&t.autoRound!==!1?Dr:Cr),this._pt.u=_||0,y&&E!==l?(this._pt.b=c,this._pt.e=E,this._pt.r=Er):g!==_&&_!==`%`&&(this._pt.b=c,this._pt.r=Tr);else if(h in o)ii.call(this,e,h,c,v?v+l:l);else if(h in e)this.add(e,h,c||e[h],v?v+l:l,r,i);else if(h!==`parseTransform`){fe(h,l);continue}y||(h in o?T.push(h,0,o[h]):typeof e[h]==`function`?T.push(h,2,e[h]()):T.push(h,1,c||e[h])),a.push(h)}}w&&Wn(this)},render:function(e,t){if(t.tween._time||!fr())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ri,aliases:Sr,getSetter:function(e,t,n){var r=Sr[t];return r&&r.indexOf(`,`)<0&&(t=r),t in mr&&t!==Lr&&(e._gsap.x||ri(e,`x`))?n&&dr===n?t===`scale`?Nr:Mr:(dr=n||{})&&(t===`scale`?Pr:Fr):e.style&&!E(e.style[t])?Ar:~t.indexOf(`-`)?jr:In(e,t)},core:{_removeProperty:Qr,_getMatrix:pi}};ar.utils.checkPrefix=Kr,ar.core.getStyleSaver=Vr,(function(e,t,n,r){var i=De(e+`,`+t+`,`+n,function(e){mr[e]=1});De(t,function(e){u.units[e]=`deg`,ui[e]=1}),Sr[i[13]]=e+`,`+t,De(r,function(e){var t=e.split(`:`);Sr[t[1]]=i[t[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`),De(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(e){u.units[e]=`px`}),ar.registerPlugin(Di);var H=ar.registerPlugin(Di)||ar;H.core.Tween;var Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li=1e3,Ri=1001,zi=1002,Bi=1003,Vi=1004,Hi=1005,Ui=1006,Wi=1007,Gi=1008,Ki=1009,qi=1010,Ji=1011,Yi=1012,Xi=1013,Zi=1014,Qi=1015,$i=1016,ea=1017,ta=1018,na=1020,ra=35902,ia=35899,aa=1021,oa=1022,sa=1023,ca=1026,la=1027,ua=1028,da=1029,fa=1030,pa=1031,ma=1033,ha=33776,ga=33777,_a=33778,va=33779,ya=35840,ba=35841,xa=35842,Sa=35843,Ca=36196,wa=37492,Ta=37496,Ea=37488,Da=37489,Oa=37490,ka=37491,Aa=37808,ja=37809,Ma=37810,Na=37811,Pa=37812,Fa=37813,Ia=37814,La=37815,Ra=37816,za=37817,Ba=37818,Va=37819,Ha=37820,Ua=37821,Wa=36492,Ga=36494,Ka=36495,qa=36283,Ja=36284,Ya=36285,Xa=36286,Za=2300,Qa=2301,$a=2302,eo=2303,to=2400,no=2401,ro=2402,io=3200,ao=`srgb`,oo=`srgb-linear`,so=`linear`,co=`srgb`,lo=7680,uo=35044,fo=2e3;function po(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function mo(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ho(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function go(){let e=ho(`canvas`);return e.style.display=`block`,e}var _o={};function vo(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function yo(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function U(...e){e=yo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function W(...e){e=yo(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function bo(...e){let t=e.join(` `);t in _o||(_o[t]=!0,U(...e))}function xo(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var So={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},Co=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},wo=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),To=Math.PI/180,Eo=180/Math.PI;function Do(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wo[e&255]+wo[e>>8&255]+wo[e>>16&255]+wo[e>>24&255]+`-`+wo[t&255]+wo[t>>8&255]+`-`+wo[t>>16&15|64]+wo[t>>24&255]+`-`+wo[n&63|128]+wo[n>>8&255]+`-`+wo[n>>16&255]+wo[n>>24&255]+wo[r&255]+wo[r>>8&255]+wo[r>>16&255]+wo[r>>24&255]).toLowerCase()}function Oo(e,t,n){return Math.max(t,Math.min(n,e))}function ko(e,t){return(e%t+t)%t}function Ao(e,t,n){return(1-n)*e+n*t}function jo(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function Mo(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function No(e,t){if(t.constructor===Float32Array)return e;let n=Mo(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function Po(e,t){if(t.constructor===Float32Array)return e;let n=Mo(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}Pi=Symbol.iterator;var G=class{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oo(this.x,e.x,t.x),this.y=Oo(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oo(this.x,e,t),this.y=Oo(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Oo(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Pi](){yield this.x,yield this.y}};Oi=G,Oi.prototype.isVector2=!0;var Fo=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:U(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oo(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};Fi=Symbol.iterator;var K=class{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lo.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oo(this.x,e.x,t.x),this.y=Oo(this.y,e.y,t.y),this.z=Oo(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oo(this.x,e,t),this.y=Oo(this.y,e,t),this.z=Oo(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Io.copy(this).projectOnVector(e),this.sub(Io)}reflect(e){return this.sub(Io.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Oo(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Fi](){yield this.x,yield this.y,yield this.z}};ki=K,ki.prototype.isVector3=!0;var Io=new K,Lo=new Fo,q=class{constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return bo(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(Ro.makeScale(e,t)),this}rotate(e){return bo(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(Ro.makeRotation(-e)),this}translate(e,t){return bo(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(Ro.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ai=q,Ai.prototype.isMatrix3=!0;var Ro=new q,zo=new q().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bo=new q().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vo(){let e={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Uo(e.r),e.g=Uo(e.g),e.b=Uo(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Wo(e.r),e.g=Wo(e.g),e.b=Wo(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?so:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[oo]:{primaries:t,whitePoint:r,transfer:so,toXYZ:zo,fromXYZ:Bo,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ao},outputColorSpaceConfig:{drawingBufferColorSpace:ao}},[ao]:{primaries:t,whitePoint:r,transfer:co,toXYZ:zo,fromXYZ:Bo,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ao}}}),e}var Ho=Vo();function Uo(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Wo(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Go,Ko=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Go===void 0&&(Go=ho(`canvas`)),Go.width=e.width,Go.height=e.height;let t=Go.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Go}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=ho(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Uo(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Uo(t[e]/255)*255):t[e]=Uo(t[e]);return{data:t,width:e.width,height:e.height}}return U(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},qo=0,Jo=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qo++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Yo(r[t].image)):e.push(Yo(r[t]))}else e=Yo(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Yo(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ko.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(U(`Texture: Unable to serialize Texture.`),{})}var Xo=0,Zo=new K,Qo=class e extends Co{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=Ri,i=Ri,a=Ui,o=Gi,s=sa,c=Ki,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xo++}),this.uuid=Do(),this.name=``,this.source=new Jo(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new G(0,0),this.repeat=new G(1,1),this.center=new G(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new q,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){U(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Li:e.x-=Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case zi:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Li:e.y-=Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case zi:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qo.DEFAULT_IMAGE=null,Qo.DEFAULT_MAPPING=300,Qo.DEFAULT_ANISOTROPY=1,Ii=Symbol.iterator;var $o=class{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oo(this.x,e.x,t.x),this.y=Oo(this.y,e.y,t.y),this.z=Oo(this.z,e.z,t.z),this.w=Oo(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oo(this.x,e,t),this.y=Oo(this.y,e,t),this.z=Oo(this.z,e,t),this.w=Oo(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oo(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Ii](){yield this.x,yield this.y,yield this.z,yield this.w}};ji=$o,ji.prototype.isVector4=!0;var es=class extends Co{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $o(0,0,e,t),this.scissorTest=!1,this.viewport=new $o(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Qo({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ui,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Jo(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},ts=class extends es{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ns=class extends Qo{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},rs=class extends Qo{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Bi,this.minFilter=Bi,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},is=class e{constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),i=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ss,e,cs)}lookAt(e,t,n){let r=this.elements;return ds.subVectors(e,t),ds.lengthSq()===0&&(ds.z=1),ds.normalize(),ls.crossVectors(n,ds),ls.lengthSq()===0&&(Math.abs(n.z)===1?ds.x+=1e-4:ds.z+=1e-4,ds.normalize(),ls.crossVectors(n,ds)),ls.normalize(),us.crossVectors(ds,ls),r[0]=ls.x,r[4]=us.x,r[8]=ds.x,r[1]=ls.y,r[5]=us.y,r[9]=ds.y,r[2]=ls.z,r[6]=us.z,r[10]=ds.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],j=r[10],M=r[14],N=r[3],P=r[7],F=r[11],I=r[15];return i[0]=a*x+o*T+s*k+c*N,i[4]=a*S+o*E+s*A+c*P,i[8]=a*C+o*D+s*j+c*F,i[12]=a*w+o*O+s*M+c*I,i[1]=l*x+u*T+d*k+f*N,i[5]=l*S+u*E+d*A+f*P,i[9]=l*C+u*D+d*j+f*F,i[13]=l*w+u*O+d*M+f*I,i[2]=p*x+m*T+h*k+g*N,i[6]=p*S+m*E+h*A+g*P,i[10]=p*C+m*D+h*j+g*F,i[14]=p*w+m*O+h*M+g*I,i[3]=_*x+v*T+y*k+b*N,i[7]=_*S+v*E+y*A+b*P,i[11]=_*C+v*D+y*j+b*F,i[15]=_*w+v*O+y*M+b*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=as.set(r[0],r[1],r[2]).length(),o=as.set(r[4],r[5],r[6]).length(),s=as.set(r[8],r[9],r[10]).length();i<0&&(a=-a),os.copy(this);let c=1/a,l=1/o,u=1/s;return os.elements[0]*=c,os.elements[1]*=c,os.elements[2]*=c,os.elements[4]*=l,os.elements[5]*=l,os.elements[6]*=l,os.elements[8]*=u,os.elements[9]*=u,os.elements[10]*=u,t.setFromRotationMatrix(os),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=fo,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=fo,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Mi=is,Mi.prototype.isMatrix4=!0;var as=new K,os=new is,ss=new K(0,0,0),cs=new K(1,1,1),ls=new K,us=new K,ds=new K,fs=new is,ps=new Fo,ms=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(Oo(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-Oo(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(Oo(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-Oo(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(Oo(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-Oo(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:U(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ps.setFromEuler(this),this.setFromQuaternion(ps,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ms.DEFAULT_ORDER=`XYZ`;var hs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},gs=0,_s=new K,vs=new Fo,ys=new is,bs=new K,xs=new K,Ss=new K,Cs=new Fo,ws=new K(1,0,0),Ts=new K(0,1,0),Es=new K(0,0,1),Ds={type:`added`},Os={type:`removed`},ks={type:`childadded`,child:null},As={type:`childremoved`,child:null},js=class e extends Co{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gs++}),this.uuid=Do(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new K,n=new ms,r=new Fo,i=new K(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new is},normalMatrix:{value:new q}}),this.matrix=new is,this.matrixWorld=new is,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(ws,e)}rotateY(e){return this.rotateOnAxis(Ts,e)}rotateZ(e){return this.rotateOnAxis(Es,e)}translateOnAxis(e,t){return _s.copy(e).applyQuaternion(this.quaternion),this.position.add(_s.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ws,e)}translateY(e){return this.translateOnAxis(Ts,e)}translateZ(e){return this.translateOnAxis(Es,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ys.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bs.copy(e):bs.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ys.lookAt(xs,bs,this.up):ys.lookAt(bs,xs,this.up),this.quaternion.setFromRotationMatrix(ys),r&&(ys.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(ys),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(W(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ds),ks.child=e,this.dispatchEvent(ks),ks.child=null):W(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Os),As.child=e,this.dispatchEvent(As),As.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ys.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ys.multiply(e.parent.matrixWorld)),e.applyMatrix4(ys),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ds),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,e,Ss),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Cs,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};js.DEFAULT_UP=new K(0,1,0),js.DEFAULT_MATRIX_AUTO_UPDATE=!0,js.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var J=class extends js{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Ms={type:`move`},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new J,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new J,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new J,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ms)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new J;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Ps={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fs={h:0,s:0,l:0},Is={h:0,s:0,l:0};function Ls(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var Y=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ao){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ho.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ho.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ho.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ho.workingColorSpace){if(e=ko(e,1),t=Oo(t,0,1),n=Oo(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=Ls(i,r,e+1/3),this.g=Ls(i,r,e),this.b=Ls(i,r,e-1/3)}return Ho.colorSpaceToWorking(this,r),this}setStyle(e,t=ao){function n(t){t!==void 0&&parseFloat(t)<1&&U(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:U(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);U(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ao){let n=Ps[e.toLowerCase()];return n===void 0?U(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}copyLinearToSRGB(e){return this.r=Wo(e.r),this.g=Wo(e.g),this.b=Wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ao){return Ho.workingToColorSpace(Rs.copy(this),e),Math.round(Oo(Rs.r*255,0,255))*65536+Math.round(Oo(Rs.g*255,0,255))*256+Math.round(Oo(Rs.b*255,0,255))}getHexString(e=ao){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ho.workingColorSpace){Ho.workingToColorSpace(Rs.copy(this),t);let n=Rs.r,r=Rs.g,i=Rs.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=Ho.workingColorSpace){return Ho.workingToColorSpace(Rs.copy(this),t),e.r=Rs.r,e.g=Rs.g,e.b=Rs.b,e}getStyle(e=ao){Ho.workingToColorSpace(Rs.copy(this),e);let t=Rs.r,n=Rs.g,r=Rs.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(Fs),this.setHSL(Fs.h+e,Fs.s+t,Fs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fs),e.getHSL(Is);let n=Ao(Fs.h,Is.h,t),r=Ao(Fs.s,Is.s,t),i=Ao(Fs.l,Is.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rs=new Y;Y.NAMES=Ps;var zs=class e{constructor(e,t=1,n=1e3){this.isFog=!0,this.name=``,this.color=new Y(e),this.near=t,this.far=n}clone(){return new e(this.color,this.near,this.far)}toJSON(){return{type:`Fog`,name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Bs=class extends js{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ms,this.environmentIntensity=1,this.environmentRotation=new ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Vs=new K,Hs=new K,Us=new K,Ws=new K,Gs=new K,Ks=new K,qs=new K,Js=new K,Ys=new K,Xs=new K,Zs=new $o,Qs=new $o,$s=new $o,ec=class e{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vs.subVectors(e,t),r.cross(Vs);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Vs.subVectors(r,t),Hs.subVectors(n,t),Us.subVectors(e,t);let a=Vs.dot(Vs),o=Vs.dot(Hs),s=Vs.dot(Us),c=Hs.dot(Hs),l=Hs.dot(Us),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ws)!==null&&Ws.x>=0&&Ws.y>=0&&Ws.x+Ws.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ws)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ws.x),s.addScaledVector(a,Ws.y),s.addScaledVector(o,Ws.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Zs.setScalar(0),Qs.setScalar(0),$s.setScalar(0),Zs.fromBufferAttribute(e,t),Qs.fromBufferAttribute(e,n),$s.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zs,i.x),a.addScaledVector(Qs,i.y),a.addScaledVector($s,i.z),a}static isFrontFacing(e,t,n,r){return Vs.subVectors(n,t),Hs.subVectors(e,t),Vs.cross(Hs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vs.subVectors(this.c,this.b),Hs.subVectors(this.a,this.b),Vs.cross(Hs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Gs.subVectors(r,n),Ks.subVectors(i,n),Js.subVectors(e,n);let s=Gs.dot(Js),c=Ks.dot(Js);if(s<=0&&c<=0)return t.copy(n);Ys.subVectors(e,r);let l=Gs.dot(Ys),u=Ks.dot(Ys);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(Gs,a);Xs.subVectors(e,i);let f=Gs.dot(Xs),p=Ks.dot(Xs);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ks,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return qs.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(qs,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Gs,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tc=class{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(rc.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(rc.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=rc.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,rc):rc.fromBufferAttribute(r,t),rc.applyMatrix4(e.matrixWorld),this.expandByPoint(rc);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),ic.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,rc),rc.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dc),fc.subVectors(this.max,dc),ac.subVectors(e.a,dc),oc.subVectors(e.b,dc),sc.subVectors(e.c,dc),cc.subVectors(oc,ac),lc.subVectors(sc,oc),uc.subVectors(ac,sc);let t=[0,-cc.z,cc.y,0,-lc.z,lc.y,0,-uc.z,uc.y,cc.z,0,-cc.x,lc.z,0,-lc.x,uc.z,0,-uc.x,-cc.y,cc.x,0,-lc.y,lc.x,0,-uc.y,uc.x,0];return!hc(t,ac,oc,sc,fc)||(t=[1,0,0,0,1,0,0,0,1],!hc(t,ac,oc,sc,fc))?!1:(pc.crossVectors(cc,lc),t=[pc.x,pc.y,pc.z],hc(t,ac,oc,sc,fc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,rc).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(rc).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(nc[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),nc[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),nc[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),nc[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),nc[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),nc[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),nc[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),nc[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(nc)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},nc=[new K,new K,new K,new K,new K,new K,new K,new K],rc=new K,ic=new tc,ac=new K,oc=new K,sc=new K,cc=new K,lc=new K,uc=new K,dc=new K,fc=new K,pc=new K,mc=new K;function hc(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){mc.fromArray(e,a);let o=i.x*Math.abs(mc.x)+i.y*Math.abs(mc.y)+i.z*Math.abs(mc.z),s=t.dot(mc),c=n.dot(mc),l=r.dot(mc);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var gc=new K,_c=new G,vc=0,yc=class extends Co{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vc++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=uo,this.updateRanges=[],this.gpuType=Qi,this.version=0,this._normalizationScale=e===void 0?void 0:Mo(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_c.fromBufferAttribute(this,t),_c.applyMatrix3(e),this.setXY(t,_c.x,_c.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix3(e),this.setXYZ(t,gc.x,gc.y,gc.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)gc.fromBufferAttribute(this,t),gc.applyMatrix4(e),this.setXYZ(t,gc.x,gc.y,gc.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gc.fromBufferAttribute(this,t),gc.applyNormalMatrix(e),this.setXYZ(t,gc.x,gc.y,gc.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gc.fromBufferAttribute(this,t),gc.transformDirection(e),this.setXYZ(t,gc.x,gc.y,gc.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?No(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Po(e,this.array):Math.round(e*t)}},bc=class extends yc{constructor(e,t,n){super(new Uint16Array(e),t,n)}},xc=class extends yc{constructor(e,t,n){super(new Uint32Array(e),t,n)}},X=class extends yc{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sc=new tc,Cc=new K,wc=new K,Tc=class{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Sc.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Cc.subVectors(e,this.center);let t=Cc.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(Cc,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Cc.copy(e.center).add(wc)),this.expandByPoint(Cc.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ec=0,Dc=new is,Oc=new js,kc=new K,Ac=new tc,jc=new tc,Mc=new K,Nc=class e extends Co{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ec++}),this.uuid=Do(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(po(e)?xc:bc)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new q().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dc.makeRotationFromQuaternion(e),this.applyMatrix4(Dc),this}rotateX(e){return Dc.makeRotationX(e),this.applyMatrix4(Dc),this}rotateY(e){return Dc.makeRotationY(e),this.applyMatrix4(Dc),this}rotateZ(e){return Dc.makeRotationZ(e),this.applyMatrix4(Dc),this}translate(e,t,n){return Dc.makeTranslation(e,t,n),this.applyMatrix4(Dc),this}scale(e,t,n){return Dc.makeScale(e,t,n),this.applyMatrix4(Dc),this}lookAt(e){return Oc.lookAt(e),Oc.updateMatrix(),this.applyMatrix4(Oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(kc).negate(),this.translate(kc.x,kc.y,kc.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new X(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&U(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Ac.setFromBufferAttribute(n),this.morphTargetsRelative?(Mc.addVectors(this.boundingBox.min,Ac.min),this.boundingBox.expandByPoint(Mc),Mc.addVectors(this.boundingBox.max,Ac.max),this.boundingBox.expandByPoint(Mc)):(this.boundingBox.expandByPoint(Ac.min),this.boundingBox.expandByPoint(Ac.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&W(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)W(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new K,1/0);else if(e){let n=this.boundingSphere.center;if(Ac.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];jc.setFromBufferAttribute(n),this.morphTargetsRelative?(Mc.addVectors(Ac.min,jc.min),Ac.expandByPoint(Mc),Mc.addVectors(Ac.max,jc.max),Ac.expandByPoint(Mc)):(Ac.expandByPoint(jc.min),Ac.expandByPoint(jc.max))}Ac.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Mc.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Mc));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Mc.fromBufferAttribute(a,t),o&&(kc.fromBufferAttribute(e,t),Mc.add(kc)),r=Math.max(r,n.distanceToSquared(Mc))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&W(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){W(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new yc(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new K,s[e]=new K;let l=new K,u=new K,d=new K,f=new G,p=new G,m=new G,h=new K,g=new K;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new K,b=new K,x=new K,S=new K;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new yc(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new K,i=new K,a=new K,o=new K,s=new K,c=new K,l=new K,u=new K;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mc.fromBufferAttribute(e,t),Mc.normalize(),e.setXYZ(t,Mc.x,Mc.y,Mc.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new yc(a,r,i)}if(this.index===null)return U(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Pc=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=uo,this.updateRanges=[],this.version=0,this.uuid=Do()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=Fc(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Fc(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=Do()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var Ic=new K,Lc=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:Mo(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyMatrix4(e),this.setXYZ(t,Ic.x,Ic.y,Ic.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.applyNormalMatrix(e),this.setXYZ(t,Ic.x,Ic.y,Ic.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ic.fromBufferAttribute(this,t),Ic.transformDirection(e),this.setXYZ(t,Ic.x,Ic.y,Ic.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){vo(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new yc(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){vo(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?No(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?Po(e,this.data.array):Math.round(e*t)}},Rc=new K,zc=new K,Bc=new q,Vc=class{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Rc.subVectors(n,t).cross(zc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Rc),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Bc.getNormalMatrix(e),r=this.coplanarPoint(Rc).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Hc=0,Uc=class extends Co{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Do(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Y(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lo,this.stencilZFail=lo,this.stencilZPass=lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){U(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?U(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Y().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new Vc().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new G().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new G().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Wc=class extends Uc{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gc,Kc=new K,qc=new K,Jc=new K,Yc=new G,Xc=new G,Zc=new is,Qc=new K,$c=new K,el=new K,tl=new G,nl=new G,rl=new G,il=class extends js{constructor(e=new Wc){if(super(),this.isSprite=!0,this.type=`Sprite`,Gc===void 0){Gc=new Nc;let e=new Pc(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Gc.setIndex([0,1,2,0,2,3]),Gc.setAttribute(`position`,new Lc(e,3,0,!1)),Gc.setAttribute(`uv`,new Lc(e,2,3,!1))}this.geometry=Gc,this.material=e,this.center=new G(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&W(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),qc.setFromMatrixScale(this.matrixWorld),Zc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Jc.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qc.multiplyScalar(-Jc.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;al(Qc.set(-.5,-.5,0),Jc,a,qc,r,i),al($c.set(.5,-.5,0),Jc,a,qc,r,i),al(el.set(.5,.5,0),Jc,a,qc,r,i),tl.set(0,0),nl.set(1,0),rl.set(1,1);let o=e.ray.intersectTriangle(Qc,$c,el,!1,Kc);if(o===null&&(al($c.set(-.5,.5,0),Jc,a,qc,r,i),nl.set(0,1),o=e.ray.intersectTriangle(Qc,el,$c,!1,Kc),o===null))return;let s=e.ray.origin.distanceTo(Kc);s<e.near||s>e.far||t.push({distance:s,point:Kc.clone(),uv:ec.getInterpolation(Kc,Qc,$c,el,tl,nl,rl,new G),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function al(e,t,n,r,i,a){Yc.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Xc.copy(Yc):(Xc.x=a*Yc.x-i*Yc.y,Xc.y=i*Yc.x+a*Yc.y),e.copy(t),e.x+=Xc.x,e.y+=Xc.y,e.applyMatrix4(Zc)}var ol=new K,sl=new K,cl=new K,ll=new K,ul=class{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ol)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ol.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ol.copy(this.origin).addScaledVector(this.direction,t),ol.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){sl.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),ll.copy(this.origin).sub(sl);let i=e.distanceTo(t)*.5,a=-this.direction.dot(cl),o=ll.dot(this.direction),s=-ll.dot(cl),c=ll.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(sl).addScaledVector(cl,d),f}intersectSphere(e,t){if(e.radius<0)return null;ol.subVectors(e.center,this.origin);let n=ol.dot(this.direction),r=ol.dot(ol)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ol)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,j,M,N;if(y>=b&&y>=x?(w=s,D=u,A=p,N=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,j=_,M=v):(S=l,C=c,T=f,E=d,O=h,k=m,j=v,M=_)):b>=x?(w=c,D=d,A=m,N=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,j=v,M=g):(S=s,C=l,T=u,E=f,O=p,k=h,j=g,M=v)):(w=l,D=f,A=h,N=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,j=g,M=_):(S=c,C=s,T=d,E=u,O=m,k=p,j=_,M=g)),w===0)return null;let P=S/w,F=C/w,I=1/w,ee=T-P*D,te=E-F*D,ne=O-P*A,re=k-F*A,ie=j-P*N,L=M-F*N,ae=ie*re-L*ne,oe=ee*L-te*ie,se=ne*te-re*ee;if(r){if(ae<0||oe<0||se<0)return null}else if((ae<0||oe<0||se<0)&&(ae>0||oe>0||se>0))return null;let ce=ae+oe+se;if(ce===0)return null;let le=I*(ae*D+oe*A+se*N);return(ce>0?le<0:le>0)?null:this.at(le/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dl=class extends Uc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fl=new is,pl=new ul,ml=new Tc,hl=new K,gl=new K,_l=new K,vl=new K,yl=new K,bl=new K,xl=new K,Sl=new K,Z=class extends js{constructor(e=new Nc,t=new dl){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){bl.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(yl.fromBufferAttribute(s,e),a?bl.addScaledVector(yl,r):bl.addScaledVector(yl.sub(t),r))}t.add(bl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ml.copy(n.boundingSphere),ml.applyMatrix4(i),pl.copy(e.ray).recast(e.near),ml.containsPoint(pl.origin)===!1&&(pl.intersectSphere(ml,hl)===null||pl.origin.distanceToSquared(hl)>(e.far-e.near)**2)||(fl.copy(i).invert(),pl.copy(e.ray).applyMatrix4(fl),(n.boundingBox===null||pl.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,pl)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=wl(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=wl(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=wl(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=wl(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Cl(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Sl.copy(s),Sl.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Sl);return l<n.near||l>n.far?null:{distance:l,point:Sl.clone(),object:e}}function wl(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,gl),e.getVertexPosition(c,_l),e.getVertexPosition(l,vl);let u=Cl(e,t,n,r,gl,_l,vl,xl);if(u){let e=new K;ec.getBarycoord(xl,gl,_l,vl,e),i&&(u.uv=ec.getInterpolatedAttribute(i,s,c,l,e,new G)),a&&(u.uv1=ec.getInterpolatedAttribute(a,s,c,l,e,new G)),o&&(u.normal=ec.getInterpolatedAttribute(o,s,c,l,e,new K),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new K,materialIndex:0};ec.getNormal(gl,_l,vl,t.normal),u.face=t,u.barycoord=e}return u}var Tl=class extends Qo{constructor(e=null,t=1,n=1,r,i,a,o,s,c=Bi,l=Bi,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},El=class extends yc{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Dl=new is,Ol=new is,kl=[],Al=new tc,jl=new is,Ml=new Z,Nl=new Tc,Pl=class extends Z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,jl)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new tc),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dl),Al.copy(e.boundingBox).applyMatrix4(Dl),this.boundingBox.union(Al)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Tc),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dl),Nl.copy(e.boundingSphere).applyMatrix4(Dl),this.boundingSphere.union(Nl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ml.geometry=this.geometry,Ml.material=this.material,Ml.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Nl.copy(this.boundingSphere),Nl.applyMatrix4(n),e.ray.intersectsSphere(Nl)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Dl),Ol.multiplyMatrices(n,Dl),Ml.matrixWorld=Ol,Ml.raycast(e,kl);for(let e=0,n=kl.length;e<n;e++){let n=kl[e];n.instanceId=i,n.object=this,t.push(n)}kl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tl(new Float32Array(r*this.count),r,this.count,ua,Qi));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Fl=new Tc,Il=new G(.5,.5),Ll=new K,Rl=class{constructor(e=new Vc,t=new Vc,n=new Vc,r=new Vc,i=new Vc,a=new Vc){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fo,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fl.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fl.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fl)}intersectsSprite(e){return Fl.center.set(0,0,0),Fl.radius=.7071067811865476+Il.distanceTo(e.center),Fl.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fl)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ll.x=r.normal.x>0?e.max.x:e.min.x,Ll.y=r.normal.y>0?e.max.y:e.min.y,Ll.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},zl=new is,Bl=class e{constructor(){this.coordinateSystem=fo,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];zl.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new Rl),n[e].setFromProjectionMatrix(zl,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new Rl),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},Vl=class extends Uc{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Y(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hl=new is,Ul=new ul,Wl=new Tc,Gl=new K,Kl=class extends js{constructor(e=new Nc,t=new Vl){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wl.copy(n.boundingSphere),Wl.applyMatrix4(r),Wl.radius+=i,e.ray.intersectsSphere(Wl)===!1)return;Hl.copy(r).invert(),Ul.copy(e.ray).applyMatrix4(Hl);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Gl.fromBufferAttribute(l,n),ql(Gl,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Gl.fromBufferAttribute(l,a),ql(Gl,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ql(e,t,n,r,i,a,o){let s=Ul.distanceSqToPoint(e);if(s<n){let n=new K;Ul.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Jl=class extends Qo{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yl=class extends Qo{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xl=class extends Qo{constructor(e,t,n=Zi,r,i,a,o=Bi,s=Bi,c,l=ca,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Zl=class extends Xl{constructor(e,t=Zi,n=301,r,i,a=Bi,o=Bi,s,c=ca){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ql=class extends Qo{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$l=class e extends Nc{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new X(c,3)),this.setAttribute(`normal`,new X(l,3)),this.setAttribute(`uv`,new X(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new K;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},eu=class e extends Nc{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new K,g=new K;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new X(o,3)),this.setAttribute(`normal`,new X(s,3)),this.setAttribute(`uv`,new X(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},tu=class e extends Nc{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new K,l=new G;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new X(a,3)),this.setAttribute(`normal`,new X(o,3)),this.setAttribute(`uv`,new X(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},nu=class e extends Nc{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new X(u,3)),this.setAttribute(`normal`,new X(d,3)),this.setAttribute(`uv`,new X(f,2));function _(){let a=new K,_=new K,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new G,m=new K,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ru=class e extends nu{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},iu=class e extends Nc{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new X(i,3)),this.setAttribute(`normal`,new X(i.slice(),3)),this.setAttribute(`uv`,new X(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new K,r=new K,i=new K;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new K;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new K;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new K,t=new K,n=new K,r=new K,o=new G,s=new G,c=new G;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},au=class e extends iu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ou=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){U(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new G:new K);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new K,r=[],i=[],a=[],o=new K,s=new is;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new K)}i[0]=new K,a[0]=new K;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(Oo(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(Oo(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},su=class extends ou{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new G){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},cu=class extends su{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function lu(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var uu=new K,du=new K,fu=new lu,pu=new lu,mu=new lu,hu=class extends ou{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new K){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(du.subVectors(r[0],r[1]).add(r[0]),c=du);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(uu.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=uu),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),fu.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),pu.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),mu.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(fu.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),pu.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),mu.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(fu.calc(s),pu.calc(s),mu.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new K().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function gu(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function _u(e,t){let n=1-e;return n*n*t}function vu(e,t){return 2*(1-e)*e*t}function yu(e,t){return e*e*t}function bu(e,t,n,r){return _u(e,t)+vu(e,n)+yu(e,r)}function xu(e,t){let n=1-e;return n*n*n*t}function Su(e,t){let n=1-e;return 3*n*n*e*t}function Cu(e,t){return 3*(1-e)*e*e*t}function wu(e,t){return e*e*e*t}function Tu(e,t,n,r,i){return xu(e,t)+Su(e,n)+Cu(e,r)+wu(e,i)}var Eu=class extends ou{constructor(e=new G,t=new G,n=new G,r=new G){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Tu(e,r.x,i.x,a.x,o.x),Tu(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Du=class extends ou{constructor(e=new K,t=new K,n=new K,r=new K){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Tu(e,r.x,i.x,a.x,o.x),Tu(e,r.y,i.y,a.y,o.y),Tu(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ou=class extends ou{constructor(e=new G,t=new G){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new G){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ku=class extends ou{constructor(e=new K,t=new K){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new K){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new K){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Au=class extends ou{constructor(e=new G,t=new G,n=new G){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new G){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(bu(e,r.x,i.x,a.x),bu(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ju=class extends ou{constructor(e=new K,t=new K,n=new K){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new K){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(bu(e,r.x,i.x,a.x),bu(e,r.y,i.y,a.y),bu(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Mu=class extends ou{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new G){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(gu(o,s.x,c.x,l.x,u.x),gu(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new G().fromArray(n))}return this}},Nu=Object.freeze({__proto__:null,ArcCurve:cu,CatmullRomCurve3:hu,CubicBezierCurve:Eu,CubicBezierCurve3:Du,EllipseCurve:su,LineCurve:Ou,LineCurve3:ku,QuadraticBezierCurve:Au,QuadraticBezierCurve3:ju,SplineCurve:Mu}),Pu=class extends ou{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Nu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Nu[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},Fu=class extends Pu{constructor(e){super(),this.type=`Path`,this.currentPoint=new G,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ou(this.currentPoint.clone(),new G(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Au(this.currentPoint.clone(),new G(e,t),new G(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Eu(this.currentPoint.clone(),new G(e,t),new G(n,r),new G(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Mu([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new su(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Iu=class extends Fu{constructor(e){super(e),this.uuid=Do(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Fu().fromJSON(n))}return this}};function Lu(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Ru(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=Gu(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return Bu(a,o,n,s,c,l,0),o}function Ru(e,t,n,r,i){let a;if(i===hd(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=fd(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=fd(i/r|0,e[i],e[i+1],a);return a&&id(a,a.next)&&(pd(a),a=a.next),a}function zu(e,t){if(!e)return e;t||(t=e);let n=e,r;do if(r=!1,!n.steiner&&(id(n,n.next)||rd(n.prev,n,n.next)===0)){if(pd(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Bu(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Xu(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?Hu(e,r,i,a):Vu(e))t.push(c.i,e.i,l.i),pd(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=Uu(zu(e),t),Bu(e,t,n,r,i,a,2)):o===2&&Wu(e,t,n,r,i,a):Bu(zu(e),t,n,r,i,a,1);break}}}function Vu(e){let t=e.prev,n=e,r=e.next;if(rd(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&td(i,s,a,c,o,l,m.x,m.y)&&rd(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Hu(e,t,n,r){let i=e.prev,a=e,o=e.next;if(rd(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Qu(p,m,t,n,r),v=Qu(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&td(s,u,c,d,l,f,y.x,y.y)&&rd(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&td(s,u,c,d,l,f,b.x,b.y)&&rd(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&td(s,u,c,d,l,f,y.x,y.y)&&rd(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&td(s,u,c,d,l,f,b.x,b.y)&&rd(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Uu(e,t){let n=e;do{let r=n.prev,i=n.next.next;!id(r,i)&&ad(r,n,n.next,i)&&ld(r,i)&&ld(i,r)&&(t.push(r.i,n.i,i.i),pd(n),pd(n.next),n=e=i),n=n.next}while(n!==e);return zu(n)}function Wu(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&nd(o,e)){let s=dd(o,e);o=zu(o,o.next),s=zu(s,s.next),Bu(o,t,n,r,i,a,0),Bu(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Gu(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=Ru(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push($u(o))}i.sort(Ku);for(let e=0;e<i.length;e++)n=qu(i[e],n);return n}function Ku(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function qu(e,t){let n=Ju(e,t);if(!n)return t;let r=dd(n,e);return zu(r,r.next),zu(n,n.next)}function Ju(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(id(e,n))return n;do{if(id(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ed(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);ld(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&Yu(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function Yu(e,t){return rd(e.prev,e,t.prev)<0&&rd(t.next,e,e.next)<0}function Xu(e,t,n,r){let i=e;do i.z===0&&(i.z=Qu(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Zu(i)}function Zu(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Qu(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function $u(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ed(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function td(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ed(e,t,n,r,i,a,o,s)}function nd(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!cd(e,t)&&(ld(e,t)&&ld(t,e)&&ud(e,t)&&(rd(e.prev,e,t.prev)||rd(e,t.prev,t))||id(e,t)&&rd(e.prev,e,e.next)>0&&rd(t.prev,t,t.next)>0)}function rd(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function id(e,t){return e.x===t.x&&e.y===t.y}function ad(e,t,n,r){let i=sd(rd(e,t,n)),a=sd(rd(e,t,r)),o=sd(rd(n,r,e)),s=sd(rd(n,r,t));return!!(i!==a&&o!==s||i===0&&od(e,n,t)||a===0&&od(e,r,t)||o===0&&od(n,e,r)||s===0&&od(n,t,r))}function od(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function sd(e){return e>0?1:e<0?-1:0}function cd(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&ad(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ld(e,t){return rd(e.prev,e,e.next)<0?rd(e,t,e.next)>=0&&rd(e,e.prev,t)>=0:rd(e,t,e.prev)<0||rd(e,e.next,t)<0}function ud(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function dd(e,t){let n=md(e.i,e.x,e.y),r=md(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function fd(e,t,n,r){let i=md(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function pd(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function md(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hd(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var gd=class{static triangulate(e,t,n=2){return Lu(e,t,n)}},_d=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];vd(e),yd(n,e);let a=e.length;t.forEach(vd);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,yd(n,t[e]);let o=gd.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function vd(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function yd(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var bd=class e extends Nc{constructor(e=new Iu([new G(.5,.5),new G(-.5,.5),new G(-.5,-.5),new G(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new X(r,3)),this.setAttribute(`uv`,new X(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?xd:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new K,b=new K,x=new K}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!_d.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];_d.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||W(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let k=C.length;function A(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new G(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new G(r/a,i/a)}let j=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),j[e]=A(D[e],D[n],D[r]);let M=[],N,P=j.concat();for(let e=0,t=E;e<t;e++){let t=w[e];N=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),N[e]=A(t[e],t[r],t[i]);M.push(N),P=P.concat(N)}let F;if(p===0)F=_d.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],j[t],a);ie(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];N=M[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],N[e],a);ie(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}F=_d.triangulateShape(e,t)}let I=F.length,ee=d+f;for(let e=0;e<k;e++){let t=l?O(C[e],P[e],ee):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ie(x.x,x.y,x.z)):ie(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<k;t++){let n=l?O(C[t],P[t],ee):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ie(x.x,x.y,x.z)):ie(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],j[e],r);ie(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];N=M[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],N[e],r);_?ie(i.x,i.y+g[s-1].y,g[s-1].x+n):ie(i.x,i.y,c+n)}}}te(),ne();function te(){let e=r.length/3;if(l){let e=0,t=k*e;for(let e=0;e<I;e++){let n=F[e];L(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=k*e;for(let e=0;e<I;e++){let n=F[e];L(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<I;e++){let t=F[e];L(t[2],t[1],t[0])}for(let e=0;e<I;e++){let t=F[e];L(t[0]+k*s,t[1]+k*s,t[2]+k*s)}}n.addGroup(e,r.length/3-e,0)}function ne(){let e=r.length/3,t=0;re(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];re(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function re(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=k*e,a=k*(e+1);ae(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ie(e,t,n){a.push(e),a.push(t),a.push(n)}function L(e,t,i){oe(e),oe(t),oe(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);se(o[0]),se(o[1]),se(o[2])}function ae(e,t,i,a){oe(e),oe(t),oe(a),oe(t),oe(i),oe(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);se(s[0]),se(s[1]),se(s[3]),se(s[1]),se(s[2]),se(s[3])}function oe(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function se(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Sd(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Nu[i.type]().fromJSON(i)),new e(r,t.options)}},xd={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new G(a,o),new G(s,c),new G(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new G(o,1-c),new G(l,1-d),new G(f,1-m),new G(h,1-_)]:[new G(s,1-c),new G(u,1-d),new G(p,1-m),new G(g,1-_)]}};function Sd(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Cd=class e extends iu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},wd=class e extends Nc{constructor(e=[new G(0,-.5),new G(.5,0),new G(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Oo(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new K,d=new G,f=new K,p=new K,m=new K,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new X(a,3)),this.setAttribute(`uv`,new X(o,2)),this.setAttribute(`normal`,new X(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Td=class e extends Nc{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Ed=class e extends Nc{constructor(e=new Iu([new G(0,.5),new G(-.5,-.5),new G(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new X(r,3)),this.setAttribute(`normal`,new X(i,3)),this.setAttribute(`uv`,new X(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;_d.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];_d.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=_d.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Dd(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Dd(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Od=class e extends Nc{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new K,d=new K,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new X(p,3)),this.setAttribute(`normal`,new X(m,3)),this.setAttribute(`uv`,new X(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},kd=class e extends Nc{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new K,f=new K,p=new K;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new X(c,3)),this.setAttribute(`normal`,new X(l,3)),this.setAttribute(`uv`,new X(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},Ad=class e extends Nc{constructor(e=new ju(new K(-1,-1,0),new K(-1,1,0),new K(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new K,s=new K,c=new G,l=new K,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new X(u,3)),this.setAttribute(`normal`,new X(d,3)),this.setAttribute(`uv`,new X(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new Nu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function jd(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Nd(i))i.isRenderTargetTexture?(U(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Nd(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function Md(e){let t={};for(let n=0;n<e.length;n++){let r=jd(e[n]);for(let e in r)t[e]=r[e]}return t}function Nd(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Pd(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Fd(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ho.workingColorSpace}var Id={clone:jd,merge:Md},Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zd=class extends Uc{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Rd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jd(e.uniforms),this.uniformsGroups=Pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new Y().setHex(r.value);break;case`v2`:this.uniforms[n].value=new G().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new K().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new $o().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new q().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new is().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Bd=class extends zd{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},Vd=class extends Uc{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Y(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Hd=class extends Vd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new G(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oo(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Y(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Y(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Y(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return bo(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){bo(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Ud=class extends Uc{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new Y(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Y(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new G(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ms,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wd=class extends Uc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=io,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gd=class extends Uc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Kd(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function qd(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var Jd=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Yd=class extends Jd{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:to,endingEnd:to}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case no:i=e,o=2*t-n;break;case ro:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case no:a=e,s=2*n-t;break;case ro:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Xd=class extends Jd{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Zd=class extends Jd{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Qd=class extends Jd{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=tf(n,t,g,y,r);i[p]=$d(x,o,_,b,m)}return i}};function $d(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ef(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function tf(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=$d(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ef(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var nf=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Kd(t,this.TimeBufferType),this.values=Kd(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Kd(e.times,Array),values:Kd(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),qd(e.settings)&&(n.settings={inTangents:Kd(e.settings.inTangents,Array),outTangents:Kd(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Yd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Qd(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Za:t=this.InterpolantFactoryMethodDiscrete;break;case Qa:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break;case eo:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return U(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Za;case this.InterpolantFactoryMethodLinear:return Qa;case this.InterpolantFactoryMethodSmooth:return $a;case this.InterpolantFactoryMethodBezier:return eo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;qd(this.settings)&&(rf(this.settings.inTangents,e),rf(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;qd(this.settings)&&(af(this.settings.inTangents,e),af(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(W(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(W(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){W(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){W(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&mo(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){W(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===$a,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,qd(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function rf(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function af(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}nf.prototype.ValueTypeName=``,nf.prototype.TimeBufferType=Float32Array,nf.prototype.ValueBufferType=Float32Array,nf.prototype.DefaultInterpolation=Qa;var of=class extends nf{constructor(e,t,n){super(e,t,n)}};of.prototype.ValueTypeName=`bool`,of.prototype.ValueBufferType=Array,of.prototype.DefaultInterpolation=Za,of.prototype.InterpolantFactoryMethodLinear=void 0,of.prototype.InterpolantFactoryMethodSmooth=void 0;var sf=class extends nf{constructor(e,t,n,r){super(e,t,n,r)}};sf.prototype.ValueTypeName=`color`;var cf=class extends nf{constructor(e,t,n,r){super(e,t,n,r)}};cf.prototype.ValueTypeName=`number`;var lf=class extends Jd{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Fo.slerpFlat(i,0,a,c-o,a,c,s);return i}},uf=class extends nf{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new lf(this.times,this.values,this.getValueSize(),e)}};uf.prototype.ValueTypeName=`quaternion`,uf.prototype.InterpolantFactoryMethodSmooth=void 0;var df=class extends nf{constructor(e,t,n){super(e,t,n)}};df.prototype.ValueTypeName=`string`,df.prototype.ValueBufferType=Array,df.prototype.DefaultInterpolation=Za,df.prototype.InterpolantFactoryMethodLinear=void 0,df.prototype.InterpolantFactoryMethodSmooth=void 0;var ff=class extends nf{constructor(e,t,n,r){super(e,t,n,r)}};ff.prototype.ValueTypeName=`vector`;var pf=class extends js{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Y(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},mf=class extends pf{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(js.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Y(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},hf=new is,gf=new K,_f=new K,vf=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new G(512,512),this.mapType=Ki,this.map=null,this.mapPass=null,this.matrix=new is,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rl,this._frameExtents=new G(1,1),this._viewportCount=1,this._viewports=[new $o(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;gf.setFromMatrixPosition(e.matrixWorld),t.position.copy(gf),_f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_f),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){hf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(hf,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(hf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yf=new K,bf=new Fo,xf=new K,Sf=class extends js{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new is,this.projectionMatrix=new is,this.projectionMatrixInverse=new is,this.coordinateSystem=fo,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yf,bf,xf),xf.x===1&&xf.y===1&&xf.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yf,bf,xf.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yf,bf,xf),xf.x===1&&xf.y===1&&xf.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yf,bf,xf.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Cf=new K,wf=new G,Tf=new G,Ef=class extends Sf{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Eo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Eo*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cf.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cf.x,Cf.y).multiplyScalar(-e/Cf.z),Cf.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cf.x,Cf.y).multiplyScalar(-e/Cf.z)}getViewSize(e,t){return this.getViewBounds(e,wf,Tf),t.subVectors(Tf,wf)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(To*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Df=class extends vf{constructor(){super(new Ef(90,1,.5,500)),this.isPointLightShadow=!0}},Of=class extends pf{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Df}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},kf=class extends Sf{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Af=class extends vf{constructor(){super(new kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jf=class extends pf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(js.DEFAULT_UP),this.updateMatrix(),this.target=new js,this.shadow=new Af}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Mf=-90,Nf=1,Pf=class extends js{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ef(Mf,Nf,e,t);r.layers=this.layers,this.add(r);let i=new Ef(Mf,Nf,e,t);i.layers=this.layers,this.add(i);let a=new Ef(Mf,Nf,e,t);a.layers=this.layers,this.add(a);let o=new Ef(Mf,Nf,e,t);o.layers=this.layers,this.add(o);let s=new Ef(Mf,Nf,e,t);s.layers=this.layers,this.add(s);let c=new Ef(Mf,Nf,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ff=class extends Ef{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},If=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Lf.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Lf(){this._document.hidden===!1&&this.reset()}var Rf=`\\[\\]\\.:\\/`,zf=RegExp(`[\\[\\]\\.:\\/]`,`g`),Bf=`[^\\[\\]\\.:\\/]`,Vf=`[^`+Rf.replace(`\\.`,``)+`]`,Hf=`((?:WC+[\\/:])*)`.replace(`WC`,Bf),Uf=`(WCOD+)?`.replace(`WCOD`,Vf),Wf=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Bf),Gf=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Bf),Kf=RegExp(`^`+Hf+Uf+Wf+Gf+`$`),qf=[`material`,`materials`,`bones`,`map`],Jf=class{constructor(e,t,n){let r=n||Yf.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Yf=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(zf,``)}static parseTrackName(e){let t=Kf.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);qf.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){U(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){W(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){W(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){W(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){W(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){W(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){W(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;W(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){W(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Yf.Composite=Jf,Yf.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Yf.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Yf.prototype.GetterByBindingType=[Yf.prototype._getValue_direct,Yf.prototype._getValue_array,Yf.prototype._getValue_arrayElement,Yf.prototype._getValue_toArray],Yf.prototype.SetterByBindingTypeAndVersioning=[[Yf.prototype._setValue_direct,Yf.prototype._setValue_direct_setNeedsUpdate,Yf.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Yf.prototype._setValue_array,Yf.prototype._setValue_array_setNeedsUpdate,Yf.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Yf.prototype._setValue_arrayElement,Yf.prototype._setValue_arrayElement_setNeedsUpdate,Yf.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Yf.prototype._setValue_fromArray,Yf.prototype._setValue_fromArray_setNeedsUpdate,Yf.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xf=new is,Zf=class{constructor(e,t,n=0,r=1/0){this.ray=new ul(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):W(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return Xf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xf),this}intersectObject(e,t=!0,n=[]){return $f(e,this,n,t),n.sort(Qf),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)$f(e[r],this,n,t);return n.sort(Qf),n}};function Qf(e,t){return e.distance-t.distance}function $f(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)$f(r[e],t,n,!0)}}Ni=class{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}},Ni.prototype.isMatrix2=!0;function ep(e,t,n,r){let i=tp(r);switch(n){case aa:return e*t;case ua:return e*t/i.components*i.byteLength;case da:return e*t/i.components*i.byteLength;case fa:return e*t*2/i.components*i.byteLength;case pa:return e*t*2/i.components*i.byteLength;case oa:return e*t*3/i.components*i.byteLength;case sa:return e*t*4/i.components*i.byteLength;case ma:return e*t*4/i.components*i.byteLength;case ha:case ga:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case _a:case va:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ba:case Sa:return Math.max(e,16)*Math.max(t,8)/4;case ya:case xa:return Math.max(e,8)*Math.max(t,8)/2;case Ca:case wa:case Ea:case Da:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ta:case Oa:case ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Na:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Pa:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case La:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case za:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Ba:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Wa:case Ga:case Ka:return Math.ceil(e/4)*Math.ceil(t/4)*16;case qa:case Ja:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ya:case Xa:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function tp(e){switch(e){case Ki:case qi:return{byteLength:1,components:1};case Yi:case Ji:case $i:return{byteLength:2,components:1};case ea:case ta:return{byteLength:2,components:4};case Zi:case Xi:case Qi:return{byteLength:4,components:1};case ra:case ia:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?U(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function np(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function rp(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ip={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Q={common:{diffuse:{value:new Y(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new q}},envmap:{envMap:{value:null},envMapRotation:{value:new q},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new q}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new q}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new q},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new q},normalScale:{value:new G(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new q},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new q}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new q}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new q}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Y(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Y(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0},uvTransform:{value:new q}},sprite:{diffuse:{value:new Y(16777215)},opacity:{value:1},center:{value:new G(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new q},alphaMap:{value:null},alphaMapTransform:{value:new q},alphaTest:{value:0}}},ap={basic:{uniforms:Md([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.fog]),vertexShader:ip.meshbasic_vert,fragmentShader:ip.meshbasic_frag},lambert:{uniforms:Md([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},envMapIntensity:{value:1}}]),vertexShader:ip.meshlambert_vert,fragmentShader:ip.meshlambert_frag},phong:{uniforms:Md([Q.common,Q.specularmap,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},specular:{value:new Y(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ip.meshphong_vert,fragmentShader:ip.meshphong_frag},standard:{uniforms:Md([Q.common,Q.envmap,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.roughnessmap,Q.metalnessmap,Q.fog,Q.lights,{emissive:{value:new Y(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ip.meshphysical_vert,fragmentShader:ip.meshphysical_frag},toon:{uniforms:Md([Q.common,Q.aomap,Q.lightmap,Q.emissivemap,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.gradientmap,Q.fog,Q.lights,{emissive:{value:new Y(0)}}]),vertexShader:ip.meshtoon_vert,fragmentShader:ip.meshtoon_frag},matcap:{uniforms:Md([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,Q.fog,{matcap:{value:null}}]),vertexShader:ip.meshmatcap_vert,fragmentShader:ip.meshmatcap_frag},points:{uniforms:Md([Q.points,Q.fog]),vertexShader:ip.points_vert,fragmentShader:ip.points_frag},dashed:{uniforms:Md([Q.common,Q.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ip.linedashed_vert,fragmentShader:ip.linedashed_frag},depth:{uniforms:Md([Q.common,Q.displacementmap]),vertexShader:ip.depth_vert,fragmentShader:ip.depth_frag},normal:{uniforms:Md([Q.common,Q.bumpmap,Q.normalmap,Q.displacementmap,{opacity:{value:1}}]),vertexShader:ip.meshnormal_vert,fragmentShader:ip.meshnormal_frag},sprite:{uniforms:Md([Q.sprite,Q.fog]),vertexShader:ip.sprite_vert,fragmentShader:ip.sprite_frag},background:{uniforms:{uvTransform:{value:new q},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ip.background_vert,fragmentShader:ip.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new q}},vertexShader:ip.backgroundCube_vert,fragmentShader:ip.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ip.cube_vert,fragmentShader:ip.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ip.equirect_vert,fragmentShader:ip.equirect_frag},distance:{uniforms:Md([Q.common,Q.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ip.distance_vert,fragmentShader:ip.distance_frag},shadow:{uniforms:Md([Q.lights,Q.fog,{color:{value:new Y(0)},opacity:{value:1}}]),vertexShader:ip.shadow_vert,fragmentShader:ip.shadow_frag}};ap.physical={uniforms:Md([ap.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new q},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new q},clearcoatNormalScale:{value:new G(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new q},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new q},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new q},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new q},sheen:{value:0},sheenColor:{value:new Y(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new q},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new q},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new q},transmissionSamplerSize:{value:new G},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new q},attenuationDistance:{value:0},attenuationColor:{value:new Y(0)},specularColor:{value:new Y(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new q},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new q},anisotropyVector:{value:new G},anisotropyMap:{value:null},anisotropyMapTransform:{value:new q}}]),vertexShader:ip.meshphysical_vert,fragmentShader:ip.meshphysical_frag};var op={r:0,b:0,g:0},sp=new is,cp=new q;cp.set(-1,0,0,0,1,0,0,0,1);function lp(e,t,n,r,i,a){let o=new Y(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new Z(new $l(1,1,1),new zd({name:`BackgroundCubeMaterial`,uniforms:jd(ap.backgroundCube.uniforms),vertexShader:ap.backgroundCube.vertexShader,fragmentShader:ap.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(sp.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(cp),l.material.toneMapped=Ho.getTransfer(i.colorSpace)!==co,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new Z(new Td(2,2),new zd({name:`BackgroundMaterial`,uniforms:jd(ap.background.uniforms),vertexShader:ap.background.vertexShader,fragmentShader:ap.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=Ho.getTransfer(i.colorSpace)!==co,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(op,Fd(e)),n.buffers.color.setClear(op.r,op.g,op.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function up(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function dp(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function fp(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(U(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&U(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&U(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function pp(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Vc,s=new q,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var mp=class extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Jl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new $l(5,5,5),i=new zd({name:`CubemapFromEquirect`,uniforms:jd(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new Z(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=Ui),new Pf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},hp=256,gp=3,_p=20,vp=256,yp=16,bp=3,xp=new K,Sp=new Y,Cp=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pf(1,10,null),this._boxMesh=new Z(new $l(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=xp}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Sp));let h=new Pf(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hp,jo(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?hp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=wp(e,!1,!1),n=Math.log2(e)-gp;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=wp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ap()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=kp()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Ep(),this._integrationMaterial=Dp());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/yp);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-bp)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(vp*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Op());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function wp(e,t,n){return new mp(e,{minFilter:Gi,generateMipmaps:t,type:$i,colorSpace:oo,depthBuffer:n})}function Tp(e,t,n){return new zd({name:e,uniforms:t,vertexShader:ip.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Ep(){return Tp(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${vp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Dp(){return Tp(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:yp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Op(){return Tp(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${_p}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function kp(){return Tp(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ap(){return Tp(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jp(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new mp(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Cp(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Cp(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Mp(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&bo(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Np(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?xc:bc)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Pp(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Fp(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:W(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Ip(e,t,n){let r=new WeakMap,i=new $o;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new ns(h,p,m,u);g.type=Qi,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new G(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Lp(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Rp={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function zp(e,t,n,r,i,a){let o=new ts(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new Nc;u.setAttribute(`position`,new X([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new X([0,2,0,0,2,0],2));let d=new Bd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new Z(u,d),p=new kf(-1,1,1,-1,0,1),m=null,h=null,g=!1,_,v=null,y=[],b=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<y.length;n++){let r=y[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){y=e,b=y.length>0&&y[0].isRenderPass===!0;let t=o.width,n=o.height;y.length>0&&s===null&&(s=new ts(t,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}),c=new ts(t,n,{type:$i,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&y.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Xl(t,n),a===!0&&(l.format=la,l.type=na)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<y.length;e++){let i=y[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&y.length===0)return!1;if(v=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return b===!1&&e.setRenderTarget(o),_=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return b},this.end=function(e,t){e.toneMapping=_,g=!0;let n=o,r=s;for(let i=0;i<y.length;i++){let a=y[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},Ho.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Rp[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(v),e.render(f,p),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var Bp=new Qo,Vp=new Xl(1,1),Hp=new Zl(1),Up=new ns,Wp=new rs,Gp=new Jl,Kp=[],qp=[],Jp=new Float32Array(16),Yp=new Float32Array(9),Xp=new Float32Array(4);function Zp(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=Kp[i];if(a===void 0&&(a=new Float32Array(i),Kp[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Qp(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function $p(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function em(e,t){let n=qp[t];n===void 0&&(n=new Int32Array(t),qp[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function tm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function nm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qp(n,t))return;e.uniform2fv(this.addr,t),$p(n,t)}}function rm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Qp(n,t))return;e.uniform3fv(this.addr,t),$p(n,t)}}function im(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qp(n,t))return;e.uniform4fv(this.addr,t),$p(n,t)}}function am(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qp(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),$p(n,t)}else{if(Qp(n,r))return;Xp.set(r),e.uniformMatrix2fv(this.addr,!1,Xp),$p(n,r)}}function om(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qp(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),$p(n,t)}else{if(Qp(n,r))return;Yp.set(r),e.uniformMatrix3fv(this.addr,!1,Yp),$p(n,r)}}function sm(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Qp(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),$p(n,t)}else{if(Qp(n,r))return;Jp.set(r),e.uniformMatrix4fv(this.addr,!1,Jp),$p(n,r)}}function cm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function lm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qp(n,t))return;e.uniform2iv(this.addr,t),$p(n,t)}}function um(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qp(n,t))return;e.uniform3iv(this.addr,t),$p(n,t)}}function dm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qp(n,t))return;e.uniform4iv(this.addr,t),$p(n,t)}}function fm(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function pm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Qp(n,t))return;e.uniform2uiv(this.addr,t),$p(n,t)}}function mm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Qp(n,t))return;e.uniform3uiv(this.addr,t),$p(n,t)}}function hm(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Qp(n,t))return;e.uniform4uiv(this.addr,t),$p(n,t)}}function gm(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function _m(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?gm(Vp):Bp,n.setTexture2D(t||a,i)}function vm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Wp,i)}function ym(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?gm(Hp):Gp,n.setTextureCube(t||a,i)}function bm(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Up,i)}function xm(e){switch(e){case 5126:return tm;case 35664:return nm;case 35665:return rm;case 35666:return im;case 35674:return am;case 35675:return om;case 35676:return sm;case 5124:case 35670:return cm;case 35667:case 35671:return lm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return bm}}function Sm(e,t){e.uniform1fv(this.addr,t)}function Cm(e,t){let n=Zp(t,this.size,2);e.uniform2fv(this.addr,n)}function wm(e,t){let n=Zp(t,this.size,3);e.uniform3fv(this.addr,n)}function Tm(e,t){let n=Zp(t,this.size,4);e.uniform4fv(this.addr,n)}function Em(e,t){let n=Zp(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Dm(e,t){let n=Zp(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Om(e,t){let n=Zp(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function km(e,t){e.uniform1iv(this.addr,t)}function Am(e,t){e.uniform2iv(this.addr,t)}function jm(e,t){e.uniform3iv(this.addr,t)}function Mm(e,t){e.uniform4iv(this.addr,t)}function Nm(e,t){e.uniform1uiv(this.addr,t)}function Pm(e,t){e.uniform2uiv(this.addr,t)}function Fm(e,t){e.uniform3uiv(this.addr,t)}function Im(e,t){e.uniform4uiv(this.addr,t)}function Lm(e,t,n){let r=this.cache,i=t.length,a=em(n,i);Qp(r,a)||(e.uniform1iv(this.addr,a),$p(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?gm(Vp):Bp;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Rm(e,t,n){let r=this.cache,i=t.length,a=em(n,i);Qp(r,a)||(e.uniform1iv(this.addr,a),$p(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Wp,a[e])}function zm(e,t,n){let r=this.cache,i=t.length,a=em(n,i);Qp(r,a)||(e.uniform1iv(this.addr,a),$p(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?gm(Hp):Gp;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function Bm(e,t,n){let r=this.cache,i=t.length,a=em(n,i);Qp(r,a)||(e.uniform1iv(this.addr,a),$p(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Up,a[e])}function Vm(e){switch(e){case 5126:return Sm;case 35664:return Cm;case 35665:return wm;case 35666:return Tm;case 35674:return Em;case 35675:return Dm;case 35676:return Om;case 5124:case 35670:return km;case 35667:case 35671:return Am;case 35668:case 35672:return jm;case 35669:case 35673:return Mm;case 5125:return Nm;case 36294:return Pm;case 36295:return Fm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Bm}}var Hm=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=xm(t.type)}},Um=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vm(t.type)}},Wm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Gm=/(\w+)(\])?(\[|\.)?/g;function Km(e,t){e.seq.push(t),e.map[t.id]=t}function qm(e,t,n){let r=e.name,i=r.length;for(Gm.lastIndex=0;;){let a=Gm.exec(r),o=Gm.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Km(n,l===void 0?new Hm(s,e,t):new Um(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Wm(s),Km(n,e)),n=e}}}var Jm=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);qm(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function Ym(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var Xm=37297,Zm=0;function Qm(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var $m=new q;function eh(e){Ho._getMatrix($m,Ho.workingColorSpace,e);let t=`mat3( ${$m.elements.map(e=>e.toFixed(4))} )`;switch(Ho.getTransfer(e)){case so:return[t,`LinearTransferOETF`];case co:return[t,`sRGBTransferOETF`];default:return U(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function th(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Qm(e.getShaderSource(t),r)}return i}function nh(e,t){let n=eh(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var rh={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function ih(e,t){let n=rh[t];return n===void 0?(U(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var ah=new K;function oh(){return Ho.getLuminanceCoefficients(ah),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${ah.x.toFixed(4)}, ${ah.y.toFixed(4)}, ${ah.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function sh(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(uh).join(`
`)}function ch(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function lh(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function uh(e){return e!==``}function dh(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function fh(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ph=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(e){return e.replace(ph,hh)}function hh(e,t){let n=ip[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return mh(n)}var gh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _h(e){return e.replace(gh,vh)}function vh(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function yh(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var bh={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function xh(e){return bh[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Sh={302:`ENVMAP_MODE_REFRACTION`};function Ch(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Sh[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var wh={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Th(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:wh[e.combine]||`ENVMAP_BLENDING_NONE`}function Eh(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=xh(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Ch(n),d=Th(n),f=sh(n),p=ch(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(uh).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(uh).join(`
`),g.length>0&&(g+=`
`)):(h=[yh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(uh).join(`
`),g=[yh(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:ip.tonemapping_pars_fragment,n.toneMapping===0?``:ih(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,ip.colorspace_pars_fragment,nh(`linearToOutputTexel`,n.outputColorSpace),oh(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(uh).join(`
`)),o=mh(o),o=dh(o,n),o=fh(o,n),s=mh(s),s=dh(s,n),s=fh(s,n),o=_h(o),s=_h(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=Ym(i,i.VERTEX_SHADER,v),x=Ym(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=th(i,b,`vertex`),n=th(i,x,`fragment`);W(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):U(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new Jm(i,m),w=lh(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Xm)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zm++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Dh=0,Oh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new kh(e),t.set(e,n)),n}},kh=class{constructor(e){this.id=Dh++,this.code=e,this.usedTimes=0}};function Ah(e){return e===1030||e===37490||e===36285}function jh(e,t,n,r,i,a){let o=new hs,s=new Oh,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&U(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=ap[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),j=e.state.buffers.depth.getReversed(),M=m.isInstancedMesh===!0,N=m.isBatchedMesh===!0,P=!!i.map,F=!!i.matcap,I=!!b,ee=I&&b.isPMREMTexture===!0,te=!!i.aoMap,ne=!!i.lightMap,re=!!i.bumpMap&&i.wireframe===!1,ie=!!i.normalMap,L=!!i.displacementMap,ae=!!i.emissiveMap,oe=!!i.metalnessMap,se=!!i.roughnessMap,ce=i.anisotropy>0,le=i.clearcoat>0,ue=i.diffuseRoughness>0,de=i.dispersion>0,fe=i.retroreflectivity>0,pe=i.iridescence>0,me=i.sheen>0,he=i.transmission>0,ge=ce&&!!i.anisotropyMap,_e=le&&!!i.clearcoatMap,ve=le&&!!i.clearcoatNormalMap,ye=le&&!!i.clearcoatRoughnessMap,be=ue&&!!i.diffuseRoughnessMap,R=pe&&!!i.iridescenceMap,xe=pe&&!!i.iridescenceThicknessMap,Se=me&&!!i.sheenColorMap,Ce=me&&!!i.sheenRoughnessMap,z=!!i.specularMap,we=!!i.specularColorMap,B=!!i.specularIntensityMap,V=he&&!!i.transmissionMap,Te=he&&!!i.thicknessMap,Ee=!!i.gradientMap,De=!!i.alphaMap,Oe=i.alphaTest>0,ke=!!i.alphaHash,Ae=!!i.extensions,je=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(je=e.toneMapping);let Me=ee?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Ne={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:N,batchingColor:N&&m._colorsTexture!==null,instancing:M,instancingColor:M&&m.instanceColor!==null,instancingMorph:M&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ho.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:P,matcap:F,envMap:I,envMapMode:I&&b.mapping,envMapPMREM:ee,envMapMaxLod:ee?Me.length-1:null,envMapSize:ee?Me[0].width:null,aoMap:te,lightMap:ne,bumpMap:re,normalMap:ie,displacementMap:L,emissiveMap:ae,normalMapObjectSpace:ie&&i.normalMapType===1,normalMapTangentSpace:ie&&i.normalMapType===0,packedNormalMap:ie&&i.normalMapType===0&&Ah(i.normalMap.format),metalnessMap:oe,roughnessMap:se,anisotropy:ce,anisotropyMap:ge,clearcoat:le,clearcoatMap:_e,clearcoatNormalMap:ve,clearcoatRoughnessMap:ye,diffuseRoughness:ue,diffuseRoughnessMap:be,dispersion:de,retroreflection:fe,iridescence:pe,iridescenceMap:R,iridescenceThicknessMap:xe,sheen:me,sheenColorMap:Se,sheenRoughnessMap:Ce,specularMap:z,specularColorMap:we,specularIntensityMap:B,transmission:he,transmissionMap:V,thicknessMap:Te,gradientMap:Ee,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:De,alphaTest:Oe,alphaHash:ke,combine:i.combine,mapUv:P&&p(i.map.channel),aoMapUv:te&&p(i.aoMap.channel),lightMapUv:ne&&p(i.lightMap.channel),bumpMapUv:re&&p(i.bumpMap.channel),normalMapUv:ie&&p(i.normalMap.channel),displacementMapUv:L&&p(i.displacementMap.channel),emissiveMapUv:ae&&p(i.emissiveMap.channel),metalnessMapUv:oe&&p(i.metalnessMap.channel),roughnessMapUv:se&&p(i.roughnessMap.channel),anisotropyMapUv:ge&&p(i.anisotropyMap.channel),clearcoatMapUv:_e&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:R&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&p(i.sheenRoughnessMap.channel),specularMapUv:z&&p(i.specularMap.channel),specularColorMapUv:we&&p(i.specularColorMap.channel),specularIntensityMapUv:B&&p(i.specularIntensityMap.channel),transmissionMapUv:V&&p(i.transmissionMap.channel),thicknessMapUv:Te&&p(i.thicknessMap.channel),alphaMapUv:De&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(ie||ce),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(P||De),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&ie===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:j,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:je,decodeVideoTexture:P&&i.map.isVideoTexture===!0&&Ho.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:ae&&i.emissiveMap.isVideoTexture===!0&&Ho.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ae&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ae&&i.extensions.multiDraw===!0||N)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ap[t];n=Id.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Eh(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Mh(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Nh(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Ph(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Fh(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||Nh),r.length>1&&r.sort(t||Ph),i.length>1&&i.sort(t||Ph)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Ih(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Fh,e.set(t,[i])):n>=r.length?(i=new Fh,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Lh(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new K,color:new Y};break;case`SpotLight`:n={position:new K,direction:new K,color:new Y,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new K,color:new Y,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new K,skyColor:new Y,groundColor:new Y};break;case`RectAreaLight`:n={color:new Y,position:new K,halfWidth:new K,halfHeight:new K}}return e[t.id]=n,n}}}function Rh(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new G,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var zh=0;function Bh(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Vh(e){let t=new Lh,n=Rh(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new K);let i=new K,a=new is,o=new is;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(Bh);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Q.LTC_FLOAT_1,r.rectAreaLTC2=Q.LTC_FLOAT_2):(r.rectAreaLTC1=Q.LTC_HALF_1,r.rectAreaLTC2=Q.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=zh++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function Hh(e){let t=new Vh(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function Uh(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Hh(e),t.set(n,[a])):r>=i.length?(a=new Hh(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Wh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kh=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],qh=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Jh=new is,Yh=new K,Xh=new K;function Zh(e,t,n){let r=new Rl,i=new G,a=new G,o=new $o,s=new Wd,c=new Gd,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new zd({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new G},radius:{value:4}},vertexShader:Wh,fragmentShader:Gh}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Nc;m.setAttribute(`position`,new yc(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new Z(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(U(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){U(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){U(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new ts(i.x,i.y,{format:fa,type:$i,minFilter:Ui,magFilter:Ui,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Xl(i.x,i.y,Qi),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=ca,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Bi,d.map.depthTexture.magFilter=Bi}else l.isPointLight?(d.map=new mp(i.x),d.map.depthTexture=new Zl(i.x,Zi)):(d.map=new ts(i.x,i.y),d.map.depthTexture=new Xl(i.x,i.y,Zi)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=ca,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=Ui,d.map.depthTexture.magFilter=Ui):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=Bi,d.map.depthTexture.magFilter=Bi);d.camera.updateProjectionMatrix()}d.map.isWebGLCubeRenderTarget!==!0&&(d.map.width!==i.x||d.map.height!==i.y)&&d.map.setSize(i.x,i.y);let g=d.map.isWebGLCubeRenderTarget?6:d.getViewportCount();l.isPointLight!==!0&&d.updateMatrices(l,s);let _=d.camera.layers.mask&4294967294?d.camera.layers:s.layers;for(let t=0;t<g;t++){let i=d.getCamera(t);if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),Yh.setFromMatrixPosition(l.matrixWorld),e.position.copy(Yh),Xh.copy(e.position),Xh.add(Kh[t]),e.up.copy(qh[t]),e.lookAt(Xh),e.updateMatrixWorld(),n.makeTranslation(-Yh.x,-Yh.y,-Yh.z),Jh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(Jh,e.coordinateSystem,e.reversedDepth)}if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}r=d.getFrustum(t),b(n,s,i,l,_,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null?n.mapPass=new ts(i.x,i.y,{format:fa,type:$i}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value.set(n.map.width,n.map.height),f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value.set(n.map.width,n.map.height),p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function y(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,x)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function b(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=y(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=y(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)b(l[e],i,a,o,s,c)}function x(e){e.target.removeEventListener(`dispose`,x);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Qh(e,t){function n(){let t=!1,n=new $o,r=null,i=new $o(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?oe(e.DEPTH_TEST):se(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=So[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?oe(e.STENCIL_TEST):se(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,M=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,P=0,F=e.getParameter(e.VERSION);F.indexOf(`WebGL`)===-1?F.indexOf(`OpenGL ES`)!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=P>=2):(P=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=P>=1);let I=null,ee={},te=e.getParameter(e.SCISSOR_BOX),ne=e.getParameter(e.VIEWPORT),re=new $o().fromArray(te),ie=new $o().fromArray(ne);function L(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let ae={};ae[e.TEXTURE_2D]=L(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=L(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=L(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=L(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),oe(e.DEPTH_TEST),o.setFunc(3),he(!1),ge(1),oe(e.CULL_FACE),pe(0);function oe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function se(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ce(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function le(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ue(t){return h!==t&&(e.useProgram(t),h=t,!0)}let de={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};de[103]=e.MIN,de[104]=e.MAX;let fe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function pe(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(se(e.BLEND),g=!1);else if(g===!1&&(oe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:W(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:W(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:W(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:W(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a=a||n,o=o||r,s=s||i,(n!==v||a!==x)&&(e.blendEquationSeparate(de[n],de[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(fe[r],fe[i],fe[o],fe[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function me(t,n){t.side===2?se(e.CULL_FACE):oe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),he(r),t.blending===1&&t.transparent===!1?pe(0):pe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),ve(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):se(e.SAMPLE_ALPHA_TO_COVERAGE)}function he(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ge(t){t===0?se(e.CULL_FACE):(oe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function _e(t){t!==k&&(N&&e.lineWidth(t),k=t)}function ve(t,n,r){t?(oe(e.POLYGON_OFFSET_FILL),(A!==n||j!==r)&&(A=n,j=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):se(e.POLYGON_OFFSET_FILL)}function ye(t){t?oe(e.SCISSOR_TEST):se(e.SCISSOR_TEST)}function be(t){t===void 0&&(t=e.TEXTURE0+M-1),I!==t&&(e.activeTexture(t),I=t)}function R(t,n,r){r===void 0&&(r=I===null?e.TEXTURE0+M-1:I);let i=ee[r];i===void 0&&(i={type:void 0,texture:void 0},ee[r]=i),(i.type!==t||i.texture!==n)&&(I!==r&&(e.activeTexture(r),I=r),e.bindTexture(t,n||ae[t]),i.type=t,i.texture=n)}function xe(){let t=ee[I];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Se(){try{e.compressedTexImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ce(){try{e.compressedTexImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function z(){try{e.texSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function we(){try{e.texSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function B(){try{e.compressedTexSubImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function V(){try{e.compressedTexSubImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Te(){try{e.texStorage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Ee(){try{e.texStorage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function De(){try{e.texImage2D(...arguments)}catch(e){W(`WebGLState:`,e)}}function Oe(){try{e.texImage3D(...arguments)}catch(e){W(`WebGLState:`,e)}}function ke(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ae(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function je(t){re.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),re.copy(t))}function Me(t){ie.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),ie.copy(t))}function Ne(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function Pe(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},I=null,ee={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new Y(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,j=null,re.set(0,0,e.canvas.width,e.canvas.height),ie.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:oe,disable:se,bindFramebuffer:ce,drawBuffers:le,useProgram:ue,setBlending:pe,setMaterial:me,setFlipSided:he,setCullFace:ge,setLineWidth:_e,setPolygonOffset:ve,setScissorTest:ye,activeTexture:be,bindTexture:R,unbindTexture:xe,compressedTexImage2D:Se,compressedTexImage3D:Ce,texImage2D:De,texImage3D:Oe,pixelStorei:Ae,getParameter:ke,updateUBOMapping:Ne,uniformBlockBinding:Pe,texStorage2D:Te,texStorage3D:Ee,texSubImage2D:z,texSubImage3D:we,compressedTexSubImage2D:B,compressedTexSubImage3D:V,scissor:je,viewport:Me,reset:Fe}}function $h(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new G,u=new WeakMap,d=new Set,f,p=new WeakMap,m=new Set,h=new FinalizationRegistry(e=>m.delete(e)),g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(e,t){return g?new OffscreenCanvas(e,t):ho(`canvas`)}function v(e,t,n){let r=1,i=Te(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=_(n,a));let o=t?_(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),U(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&U(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function y(e){return e.generateMipmaps}function b(t){e.generateMipmap(t)}function x(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];U(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||U(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?so:Ho.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function C(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,U(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function w(e,t){return y(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function T(e){let t=new WeakRef(e);r.get(e).__ref=t,m.add(t),h.register(e,t,t)}function E(e){let t=r.get(e).__ref;t!==void 0&&(m.delete(t),h.unregister(t))}function D(e){k(e.target)}function O(e){A(e.target)}function k(e){e.removeEventListener(`dispose`,D),E(e),M(e),e.isVideoTexture&&u.delete(e),e.isHTMLTexture&&d.delete(e)}function A(e){e.removeEventListener(`dispose`,O),E(e),P(e)}function j(){for(let e of m){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?A(t):k(t))}m.clear(),d.clear()}function M(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&N(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function N(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function P(t){let n=r.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let i=t.depthTexture;if(i&&i.renderTarget===t&&k(i),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let a=t.textures;for(let t=0,n=a.length;t<n;t++){let n=r.get(a[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(a[t])}r.remove(t)}let F=0;function I(){F=0}function ee(){return F}function te(e){F=e}function ne(){let e=F;return e>=i.maxTextures&&U(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+i.maxTextures),F+=1,e}function re(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ie(t,i){let a=r.get(t);if(t.isVideoTexture&&B(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)U(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)U(`WebGLRenderer: Texture marked for update but image is incomplete`);else{me(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function L(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):(t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null),n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i))}function ae(t,i){let a=r.get(t);t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version?me(a,t,i):n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function oe(t,i){let a=r.get(t);t.version>0&&a.__version!==t.version?he(a,t,i):n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let se={[Li]:e.REPEAT,[Ri]:e.CLAMP_TO_EDGE,[zi]:e.MIRRORED_REPEAT},ce={[Bi]:e.NEAREST,[Vi]:e.NEAREST_MIPMAP_NEAREST,[Hi]:e.NEAREST_MIPMAP_LINEAR,[Ui]:e.LINEAR,[Wi]:e.LINEAR_MIPMAP_NEAREST,[Gi]:e.LINEAR_MIPMAP_LINEAR},le={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ue(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&U(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,se[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,se[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,se[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,ce[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,ce[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,le[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function de(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,D),T(n));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=re(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&N(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function fe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function pe(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=fe(n.start,r.width,4),c=fe(t.start,r.width,4);n.start<=i+1&&a===c&&fe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function me(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=de(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=Ho.getPrimaries(Ho.workingColorSpace),r=o.colorSpace===``?null:Ho.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=v(o.image,!1,i.maxTextureSize);t=V(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=S(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ue(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,x=f.__version===void 0||l===!0,T=u.dataReady,E=w(o,t);if(o.isDepthTexture)m=C(o.format===la,o.type),x&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture){if(g.length>0){_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(x&&n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height),T&&pe(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data)}else if(o.isCompressedTexture){if(o.isCompressedArrayTexture){_&&x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023){if(r!==null){if(_){if(T){if(o.layerUpdates.size>0){let t=ep(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0)}else U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else _?T&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data);o.layerUpdates.size>0&&o.clearLayerUpdates()}else{_&&x&&n.texStorage2D(e.TEXTURE_2D,E,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?T&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}}else if(o.isDataArrayTexture){if(_){if(x&&n.texStorage3D(e.TEXTURE_2D_ARRAY,E,m,t.width,t.height,t.depth),T){if(o.layerUpdates.size>0){let i=ep(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data)}else if(o.isData3DTexture)_?(x&&n.texStorage3D(e.TEXTURE_3D,E,m,t.width,t.height,t.depth),T&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(x){if(_)n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<E;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&x){let t=Te(g[0]);n.texStorage2D(e.TEXTURE_2D,E,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?T&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(x){let r=Te(t);n.texStorage2D(e.TEXTURE_2D,E,m,r.width,r.height)}T&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);y(o)&&o.mipmapsAutoUpdate===!0&&b(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function he(t,o,s){if(o.image.length!==6)return;let c=de(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=Ho.getPrimaries(Ho.workingColorSpace),r=o.colorSpace===``?null:Ho.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=v(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=V(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),x=S(o.internalFormat,g,_,o.normalized,o.colorSpace),T=o.isVideoTexture!==!0,E=u.__version===void 0||c===!0,D=l.dataReady,O=w(o,h);ue(e.TEXTURE_CUBE_MAP,o);let k;if(o.isDepthTexture){if(x=C(o.format===la,o.type),E){if(T)n.texStorage2D(e.TEXTURE_CUBE_MAP,1,x,h.width,h.height);else for(let t=0;t<6;t++)n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,h.width,h.height,0,g,_,null)}}else if(f){T&&E&&n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,h.width,h.height);for(let t=0;t<6;t++){k=m[t].mipmaps;for(let r=0;r<k.length;r++){let i=k[r];o.format===1023?T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,g,_,i.data):g===null?U(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):T?D&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,x,i.width,i.height,0,i.data)}}}else{if(k=o.mipmaps,T&&E){k.length>0&&O++;let t=Te(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,O,x,t.width,t.height)}for(let t=0;t<6;t++)if(p){T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<k.length;r++){let i=k[r].image[t].image;T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,i.width,i.height,0,g,_,i.data)}}else{T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,x,g,_,m[t]);for(let r=0;r<k.length;r++){let i=k[r];T?D&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,x,g,_,i.image[t])}}}y(o)&&o.mipmapsAutoUpdate===!0&&b(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function ge(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=S(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),we(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,z(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=C(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;we(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,z(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=S(o.internalFormat,c,l,o.normalized,o.colorSpace);we(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,z(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,z(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ve(t,i,a){let o=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let c=r.get(i.depthTexture);c.__renderTarget=i;let l=o?i.depthTexture.image[0]:i.depthTexture.image;c.__webglTexture&&l.width===i.width&&l.height===i.height||(l.width=i.width,l.height=i.height,i.depthTexture.needsUpdate=!0),o?oe(i.depthTexture,0):ie(i.depthTexture,0);let u=c.__webglTexture,d=z(i),f=o?e.TEXTURE_CUBE_MAP_POSITIVE_X+a:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)we(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)we(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function ye(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer){if(a)for(let e=0;e<6;e++)ve(i.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?ve(i.__webglFramebuffer[0],t,0):ve(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),_e(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),_e(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function be(t,n,i){let a=r.get(t);n!==void 0&&ge(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&ye(t)}function R(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,O),T(t);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&we(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=S(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=z(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),_e(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ue(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)ge(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);y(i)?b(e.TEXTURE_CUBE_MAP):i.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ue(c,a),ge(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),y(a)&&b(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ue(r,i),i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)ge(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else ge(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);y(i)?b(r):i.mipmaps.length>0&&e.texParameteri(r,e.TEXTURE_MAX_LEVEL,i.mipmaps.length-1),n.unbindTexture()}t.depthBuffer&&ye(t)}function xe(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(y(a)&&a.mipmapsAutoUpdate===!0){let t=x(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),b(t),n.unbindTexture()}}}let Se=[];function Ce(t){if(t.samples>0){if(we(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Se.length=0,Se.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Se.push(l),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Se))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function z(e){return Math.min(i.maxSamples,e.samples)}function we(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function B(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function V(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(Ho.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&U(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):W(`WebGLTextures: Unsupported texture color space:`,n)),t}function Te(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=ne,this.resetTextureUnits=I,this.getTextureUnits=ee,this.setTextureUnits=te,this.setTexture2D=ie,this.setTexture2DArray=L,this.setTexture3D=ae,this.setTextureCube=oe,this.rebindTextures=be,this.setupRenderTarget=R,this.updateRenderTargetMipmap=xe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=we,this.dispose=j}function eg(e,t){function n(n,r=``){let i,a=Ho.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,rg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ql(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new zd({vertexShader:tg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Z(new Td(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ig=class extends Co{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new rg,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new G,C=null,w=null,T=new Ef;T.viewport=new $o;let E=new Ef;E.viewport=new $o;let D=[T,E],O=new Ff,k=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new Ns,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new Ns,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new Ns,b[e]=t),t.getHandSpace()};function j(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function M(){r.removeEventListener(`select`,j),r.removeEventListener(`selectstart`,j),r.removeEventListener(`selectend`,j),r.removeEventListener(`squeeze`,j),r.removeEventListener(`squeezestart`,j),r.removeEventListener(`squeezeend`,j),r.removeEventListener(`end`,M),r.removeEventListener(`inputsourceschange`,N);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}k=null,A=null,h.reset();for(let e in g)delete g[e];if(e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),w!==null){let e=w.camera;e.fov=w.fov,e.zoom=w.zoom,e.updateProjectionMatrix(),w=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&U(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,j),r.addEventListener(`selectstart`,j),r.addEventListener(`selectend`,j),r.addEventListener(`squeeze`,j),r.addEventListener(`squeezestart`,j),r.addEventListener(`squeezeend`,j),r.addEventListener(`end`,M),r.addEventListener(`inputsourceschange`,N),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?la:ca,a=_.stencil?na:Zi);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new ts(d.textureWidth,d.textureHeight,{format:sa,type:Ki,depthTexture:new Xl(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new ts(f.framebufferWidth,f.framebufferHeight,{format:sa,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function N(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}function P(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=T.near=t,O.far=E.far=T.far=n,(k!==O.near||A!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),k=O.near,A=O.far),O.layers.mask=e.layers.mask|6,T.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;P(O,i);for(let e=0;e<a.length;e++)P(a[e],i);O.projectionMatrix.copy(T.projectionMatrix),O.projectionMatrixInverse.copy(T.projectionMatrixInverse),w===null&&e.isPerspectiveCamera&&(w={camera:e,fov:e.fov,zoom:e.zoom}),F(e,O,i)};function F(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Eo*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(d!==null||f!==null)return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let I=null;function ee(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Ef,o.layers.enable(n),o.viewport=new $o,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ql,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}I&&I(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let te=new np;te.setAnimationLoop(ee),this.setAnimationLoop=function(e){I=e},this.dispose=function(){}}},ag=new is,og=new q;og.set(-1,0,0,0,1,0,0,0,1);function sg(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Fd(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ag.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(og),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function cg(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?U(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):U(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var lg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ug=null;function dg(){return ug===null&&(ug=new Tl(lg,16,16,fa,$i),ug.name=`DFG_LUT`,ug.minFilter=Ui,ug.magFilter=Ui,ug.wrapS=Ri,ug.wrapT=Ri,ug.generateMipmaps=!1,ug.needsUpdate=!0),ug}var fg=class{constructor(e={}){let{canvas:t=go(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ki}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([ma,pa,da]),g=new Set([Ki,Zi,Yi,na,ea,ta]),_=new Uint32Array(4),v=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},b=null,x=null,S=[],C=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let T=this,E=!1,D=null,O=null,k=null,A=null;this._outputColorSpace=ao;let j=0,M=0,N=null,P=-1,F=null,I=new $o,ee=new $o,te=null,ne=new Y(0),re=0,ie=t.width,L=t.height,ae=1,oe=null,se=null,ce=new $o(0,0,ie,L),le=new $o(0,0,ie,L),ue=!1,de=new Rl,fe=new Bl,pe=!1,me=!1,he=new is,ge=new K,_e=new $o,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ye=!1;function be(){return N===null?ae:1}let R=n;function xe(e,n){return t.getContext(e,n)}let Se,Ce,z,we,B,V,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,We,!1),t.addEventListener(`webglcontextrestored`,Ge,!1),t.addEventListener(`webglcontextcreationerror`,Ke,!1),R===null){let t=`webgl2`;if(R=xe(t,e),R===null)throw xe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}He()}catch(e){throw t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),W(`WebGLRenderer: `+e.message),e}function He(){Se=new Mp(R),Se.init(),ze=new eg(R,Se),Ce=new fp(R,Se,e,ze),z=new Qh(R,Se),Ce.reversedDepthBuffer&&d&&z.buffers.depth.setReversed(!0),O=R.createFramebuffer(),k=R.createFramebuffer(),A=R.createFramebuffer(),we=new Fp(R),B=new Mh,V=new $h(R,Se,z,B,Ce,ze,we),Te=new jp(T),Ee=new rp(R),Be=new up(R,Ee),De=new Np(R,Ee,we,Be),Oe=new Lp(R,De,Ee,Be,we),Ie=new Ip(R,Ce,V),Ne=new pp(B),ke=new jh(T,Te,Se,Ce,Be,Ne),Ae=new sg(T,B),je=new Ih,Me=new Uh(Se),Fe=new lp(T,Te,z,Oe,p,s),Pe=new Zh(T,Oe,Ce),Ve=new cg(R,we,Ce,z),Le=new dp(R,Se,we),Re=new Pp(R,Se,we),we.programs=ke.programs,T.capabilities=Ce,T.extensions=Se,T.properties=B,T.renderLists=je,T.shadowMap=Pe,T.state=z,T.info=we}m!==1009&&(w=new zp(m,t.width,t.height,o,r,i));let Ue=new ig(T,R);this.xr=Ue,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){let e=Se.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Se.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(e){e!==void 0&&(ae=e,this.setSize(ie,L,!1))},this.getSize=function(e){return e.set(ie,L)},this.setSize=function(e,n,r=!0){Ue.isPresenting?U(`WebGLRenderer: Can't change size while VR device is presenting.`):(ie=e,L=n,t.width=Math.floor(e*ae),t.height=Math.floor(n*ae),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ie*ae,L*ae).floor()},this.setDrawingBufferSize=function(e,n,r){ie=e,L=n,ae=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009)W(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){U(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}w.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(I)},this.getViewport=function(e){return e.copy(ce)},this.setViewport=function(e,t,n,r){e.isVector4?ce.set(e.x,e.y,e.z,e.w):ce.set(e,t,n,r),z.viewport(I.copy(ce).multiplyScalar(be()).round())},this.getScissor=function(e){return e.copy(le)},this.setScissor=function(e,t,n,r){e.isVector4?le.set(e.x,e.y,e.z,e.w):le.set(e,t,n,r),z.scissor(ee.copy(le).multiplyScalar(be()).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(e){z.setScissorTest(ue=e)},this.setOpaqueSort=function(e){oe=e},this.setTransparentSort=function(e){se=e},this.getClearColor=function(e){return e.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(N!==null){let t=N.texture.format;e=h.has(t)}if(e){let e=N.texture.type,t=g.has(e),n=Fe.getClearColor(),r=Fe.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,R.clearBufferuiv(R.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,R.clearBufferiv(R.COLOR,0,v))}else r|=R.COLOR_BUFFER_BIT}t&&(r|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&R.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),D=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,We,!1),t.removeEventListener(`webglcontextrestored`,Ge,!1),t.removeEventListener(`webglcontextcreationerror`,Ke,!1),Fe.dispose(),je.dispose(),Me.dispose(),V.dispose(),B.dispose(),Te.dispose(),Oe.dispose(),De.dispose(),Be.dispose(),Ve.dispose(),ke.dispose(),Ue.dispose(),Ue.removeEventListener(`sessionstart`,$e),Ue.removeEventListener(`sessionend`,et),tt.stop()};function We(e){e.preventDefault(),vo(`WebGLRenderer: Context Lost.`),E=!0}function Ge(){vo(`WebGLRenderer: Context Restored.`),E=!1;let e=we.autoReset,t=Pe.enabled,n=Pe.autoUpdate,r=Pe.needsUpdate,i=Pe.type;He(),we.autoReset=e,Pe.enabled=t,Pe.autoUpdate=n,Pe.needsUpdate=r,Pe.type=i}function Ke(e){W(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function qe(e){let t=e.target;t.removeEventListener(`dispose`,qe),Je(t)}function Je(e){Ye(e),B.remove(e)}function Ye(e){let t=B.get(e).programs;t!==void 0&&(t.forEach(function(e){ke.releaseProgram(e)}),e.isShaderMaterial&&ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=ve);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=ft(e,t,n,r,i);z.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=De.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Be.setup(i,r,s,n,c);let h,g=Le;if(c!==null&&(h=Ee.get(c),g=Re,g.setIndex(h)),i.isMesh)r.wireframe===!0?(z.setLineWidth(r.wireframeLinewidth*be()),g.setMode(R.LINES)):g.setMode(R.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),z.setLineWidth(e*be()),i.isLineSegments?g.setMode(R.LINES):i.isLineLoop?g.setMode(R.LINE_LOOP):g.setMode(R.LINE_STRIP)}else i.isPoints?g.setMode(R.POINTS):i.isSprite&&g.setMode(R.TRIANGLES);if(i.isBatchedMesh){if(Se.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ee.get(c).bytesPerElement:1,o=B.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(R,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function Xe(e,t,n,r){D!==null&&e.isNodeMaterial&&D.setObject(r,e),pe===!0&&Ne.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,ct(e,t,r),e.side=0,e.needsUpdate=!0,ct(e,t,r),e.side=2):ct(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),D!==null&&D.renderStart(e,t,n),x=Me.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights(),D!==null&&D.updateLights(x.state.lightsArray),me=this.localClippingEnabled,pe=Ne.init(this.clippingPlanes,me),pe===!0&&Ne.setGlobalState(this.clippingPlanes,t),D!==null&&Pe.render(x.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];Xe(o,n,t,e),r.add(o)}else Xe(i,n,t,e),r.add(i)}}),x=C.pop(),D!==null&&D.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=B.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Se.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let Ze=null;function Qe(e){Ze&&Ze(e)}function $e(){tt.stop()}function et(){tt.start()}let tt=new np;tt.setAnimationLoop(Qe),typeof self<`u`&&tt.setContext(self),this.setAnimationLoop=function(e){Ze=e,Ue.setAnimationLoop(e),e===null?tt.stop():tt.start()},Ue.addEventListener(`sessionstart`,$e),Ue.addEventListener(`sessionend`,et),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){W(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(E===!0)return;D!==null&&D.renderStart(e,t);let n=Ue.enabled===!0&&Ue.isPresenting===!0,r=w!==null&&(N===null||n)&&w.begin(T,N);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(t),t=Ue.getCamera()),e.isScene===!0&&e.onBeforeRender(T,e,t,N),x=Me.get(e,C.length),x.init(t),x.state.textureUnits=V.getTextureUnits(),C.push(x),he.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?fe.setFromArrayCamera(t):de.setFromProjectionMatrix(he,fo,t.reversedDepth),me=this.localClippingEnabled,pe=Ne.init(this.clippingPlanes,me),b=je.get(e,S.length),b.init(),S.push(b),this.info.render.frame++,Ue.enabled===!0&&Ue.isPresenting===!0){let e=T.xr.getDepthSensingMesh();e!==null&&nt(e,t,-1/0,T.sortObjects)}nt(e,t,0,T.sortObjects),b.finish(),D!==null&&D.updateLights(x.state.lightsArray),T.sortObjects===!0&&b.sort(oe,se),ye=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,ye&&Fe.addToRenderList(b,e),this.info.autoReset===!0&&this.info.reset(),pe===!0&&Ne.beginShadows();let i=x.state.shadowsArray;if(Pe.render(i,e,t),pe===!0&&Ne.endShadows(),(r&&w.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];it(n,r,e,a)}ye&&Fe.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];rt(b,e,n,n.viewport)}}else r.length>0&&it(n,r,e,t),ye&&Fe.render(e),rt(b,e,t)}N!==null&&M===0&&(V.updateMultisampleRenderTarget(N),V.updateRenderTargetMipmap(N)),r&&w.end(T),e.isScene===!0&&e.onAfterRender(T,e,t),Be.resetDefaultState(),P=-1,F=null,C.pop(),C.length>0?(x=C[C.length-1],V.setTextureUnits(x.state.textureUnits),pe===!0&&Ne.setGlobalState(T.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,D!==null&&D.renderEnd()};function nt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?fe:de;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&_e.setFromMatrixPosition(e.matrixWorld).applyMatrix4(he);let i=Oe.update(e),a=e.material;a.visible&&b.push(e,i,a,n,_e.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?fe:de;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Oe.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),_e.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),_e.copy(e.boundingSphere.center)),_e.applyMatrix4(e.matrixWorld).applyMatrix4(he)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&b.push(e,i,c,n,_e.z,s,t)}}else a.visible&&b.push(e,i,a,n,_e.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)nt(i[e],t,n,r)}function rt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),pe===!0&&Ne.setGlobalState(T.clippingPlanes,n),r&&z.viewport(I.copy(r)),i.length>0&&at(i,t,n),a.length>0&&at(a,t,n),o.length>0&&at(o,t,n),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function it(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Se.has(`EXT_color_buffer_half_float`)||Se.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new ts(1,1,{generateMipmaps:!0,type:e?$i:Ki,minFilter:Gi,samples:Math.max(4,Ce.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ho.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||I;a.setSize(o.z*T.transmissionResolutionScale,o.w*T.transmissionResolutionScale);let s=T.getRenderTarget(),c=T.getActiveCubeFace(),l=T.getActiveMipmapLevel();T.setRenderTarget(a),T.getClearColor(ne),re=T.getClearAlpha(),re<1&&T.setClearColor(16777215,.5),T.clear(),ye&&Fe.render(n);let u=T.toneMapping;T.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),pe===!0&&Ne.setGlobalState(T.clippingPlanes,r),at(e,n,r),V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a),Se.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,ot(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(V.updateMultisampleRenderTarget(a),V.updateRenderTargetMipmap(a))}T.setRenderTarget(s,c,l),T.setClearColor(ne,re),d!==void 0&&(r.viewport=d),T.toneMapping=u}function at(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&ot(o,t,n,s,l,c)}}function ot(e,t,n,r,i,a){D!==null&&i.isNodeMaterial&&D.setObject(e,i),e.onBeforeRender(T,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(T,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,T.renderBufferDirect(n,t,r,i,e,a),i.side=2):T.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(T,t,n,r,i,a)}function st(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function ct(e,t,n){t.isScene!==!0&&(t=ve);let r=B.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=ke.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Te.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,qe),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return dt(e,s),d}else s.uniforms=ke.getUniforms(e),D!==null&&e.isNodeMaterial&&D.build(e,n,s),e.onBeforeCompile(s,T),d=ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ne.uniform),dt(e,s),r.needsLights=mt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=st(x.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function lt(e,t,n,r,i){let a=B.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=ct(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function ut(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=Jm.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function dt(e,t){let n=B.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function ft(e,t,n,r,i){t.isScene!==!0&&(t=ve),V.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Ho.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Te.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(h=T.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=B.get(r),b=x.state.lights;if(pe===!0&&(me===!0||e!==F)){let t=e===F&&r.id===P;Ne.setState(r,e,t)}let S=!1,C=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==b.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?S=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ne.numPlanes||v.numIntersection!==Ne.numIntersection)?S=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===st(x.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(C=!0):S=!0:S=!0:(S=!0,v.__version=r.version);let w=v.currentProgram;(S===!0||C===!0)&&(w=C===!0?lt(r,t,i,s,h):ct(r,t,i),D&&r.isNodeMaterial&&D.onUpdateProgram(r,w,v));let E=!1,O=!1,k=!1,A=w.getUniforms(),j=v.uniforms;if(z.useProgram(w.program)&&(E=!0,O=!0,k=!0),r.id!==P&&(P=r.id,O=!0),E||F!==e){z.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),A.setValue(R,`projectionMatrix`,e.projectionMatrix),A.setValue(R,`viewMatrix`,e.matrixWorldInverse);let t=A.map.cameraPosition;t!==void 0&&t.setValue(R,ge.setFromMatrixPosition(e.matrixWorld)),Ce.logarithmicDepthBuffer&&A.setValue(R,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&A.setValue(R,`isOrthographic`,e.isOrthographicCamera===!0),F!==e&&(F=e,O=!0,k=!0)}if(v.needsLights&&(b.state.sunShadowMap.length>0&&A.setValue(R,`sunShadowMap`,b.state.sunShadowMap,V),b.state.directionalShadowMap.length>0&&A.setValue(R,`directionalShadowMap`,b.state.directionalShadowMap,V),b.state.spotShadowMap.length>0&&A.setValue(R,`spotShadowMap`,b.state.spotShadowMap,V),b.state.pointShadowMap.length>0&&A.setValue(R,`pointShadowMap`,b.state.pointShadowMap,V)),i.isSkinnedMesh){A.setOptional(R,i,`bindMatrix`),A.setOptional(R,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),A.setValue(R,`boneTexture`,e.boneTexture,V))}i.isBatchedMesh&&(A.setOptional(R,i,`batchingTexture`),A.setValue(R,`batchingTexture`,i._matricesTexture,V),A.setOptional(R,i,`batchingIdTexture`),A.setValue(R,`batchingIdTexture`,i._indirectTexture,V),A.setOptional(R,i,`batchingColorTexture`),i._colorsTexture!==null&&A.setValue(R,`batchingColorTexture`,i._colorsTexture,V));let M=n.morphAttributes;if((M.position!==void 0||M.normal!==void 0||M.color!==void 0)&&Ie.update(i,n,w),(O||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,A.setValue(R,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(j.envMapIntensity.value=t.environmentIntensity),j.dfgLUT!==void 0&&(j.dfgLUT.value=dg()),O){if(A.setValue(R,`toneMappingExposure`,T.toneMappingExposure),v.needsLights&&pt(j,k),a&&r.fog===!0&&Ae.refreshFogUniforms(j,a),Ae.refreshMaterialUniforms(j,r,ae,L,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=y,t=0;for(let n of x.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;j.probesSH.value=e.textures,j.probesMin.value=e.min,j.probesMax.value=e.max,j.probesResolution.value=e.resolution}Jm.upload(R,ut(v),j,V)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(Jm.upload(R,ut(v),j,V),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&A.setValue(R,`center`,i.center),A.setValue(R,`modelViewMatrix`,i.modelViewMatrix),A.setValue(R,`normalMatrix`,i.normalMatrix),A.setValue(R,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Ve.update(n,w),Ve.bind(n,w)}}return w}function pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function mt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(e,t,n){let r=B.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),B.get(e.texture).__webglTexture=t,B.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=B.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){N=e,j=t,M=n;let r=null,i=!1,a=!1;if(e){let o=B.get(e);if(o.__useDefaultFramebuffer!==void 0){z.bindFramebuffer(R.FRAMEBUFFER,o.__webglFramebuffer),I.copy(e.viewport),ee.copy(e.scissor),te=e.scissorTest,z.viewport(I),z.scissor(ee),z.setScissorTest(te),P=-1;return}if(o.__webglFramebuffer===void 0)V.setupRenderTarget(e);else if(o.__hasExternalTextures)V.rebindTextures(e,B.get(e.texture).__webglTexture,B.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&B.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);V.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=B.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&V.useMultisampledRTT(e)===!1?B.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,I.copy(e.viewport),ee.copy(e.scissor),te=e.scissorTest}else I.copy(ce).multiplyScalar(ae).floor(),ee.copy(le).multiplyScalar(ae).floor(),te=ue;if(n!==0&&(r=O),z.bindFramebuffer(R.FRAMEBUFFER,r)&&z.drawBuffers(e,r),z.viewport(I),z.scissor(ee),z.setScissorTest(te),i){let r=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=B.get(e.textures[t]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=B.get(e.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,t.__webglTexture,n)}P=-1};function ht(e){let t=B.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Ce.textureFormatReadable(e.format),t.__typeReadable=Ce.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){z.bindFramebuffer(R.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let u=ht(o);if(u.__formatReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){W(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&R.readPixels(t,n,r,i,ze.convert(c),ze.convert(l),a)}finally{let e=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=B.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){z.bindFramebuffer(R.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+s);let d=ht(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.bufferData(R.PIXEL_PACK_BUFFER,a.byteLength,R.STREAM_READ),R.readPixels(t,n,r,i,ze.convert(l),ze.convert(u),0),R.bindBuffer(R.PIXEL_PACK_BUFFER,null);let p=N===null?null:B.get(N).__webglFramebuffer;z.bindFramebuffer(R.FRAMEBUFFER,p);let m=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await xo(R,m,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,f),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,a),R.bindBuffer(R.PIXEL_PACK_BUFFER,null),R.deleteBuffer(f),R.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;V.setTexture2D(e,0),R.copyTexSubImage2D(R.TEXTURE_2D,n,0,0,o,s,i,a),z.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=ze.convert(t.format),_=ze.convert(t.type),v;t.isData3DTexture?(V.setTexture3D(t,0),v=R.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(V.setTexture2DArray(t,0),v=R.TEXTURE_2D_ARRAY):(V.setTexture2D(t,0),v=R.TEXTURE_2D),z.activeTexture(R.TEXTURE0),z.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,t.flipY),z.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),z.pixelStorei(R.UNPACK_ALIGNMENT,t.unpackAlignment);let y=z.getParameter(R.UNPACK_ROW_LENGTH),b=z.getParameter(R.UNPACK_IMAGE_HEIGHT),x=z.getParameter(R.UNPACK_SKIP_PIXELS),S=z.getParameter(R.UNPACK_SKIP_ROWS),C=z.getParameter(R.UNPACK_SKIP_IMAGES);z.pixelStorei(R.UNPACK_ROW_LENGTH,h.width),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,h.height),z.pixelStorei(R.UNPACK_SKIP_PIXELS,l),z.pixelStorei(R.UNPACK_SKIP_ROWS,u),z.pixelStorei(R.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=B.get(e),r=B.get(t),h=B.get(n.__renderTarget),g=B.get(r.__renderTarget);z.bindFramebuffer(R.READ_FRAMEBUFFER,h.__webglFramebuffer),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(e).__webglTexture,i,d+n),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,B.get(t).__webglTexture,a,m+n)),R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.DEPTH_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||B.has(e)){let n=B.get(e),r=B.get(t);z.bindFramebuffer(R.READ_FRAMEBUFFER,k),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,A);for(let e=0;e<c;e++)w?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,n.__webglTexture,i),T?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,r.__webglTexture,a),i===0?T?R.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):R.copyTexSubImage2D(v,a,f,p,l,u,o,s):R.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,R.COLOR_BUFFER_BIT,R.NEAREST);z.bindFramebuffer(R.READ_FRAMEBUFFER,null),z.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?R.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):R.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):R.texSubImage2D(R.TEXTURE_2D,a,f,p,o,s,g,_,h);z.pixelStorei(R.UNPACK_ROW_LENGTH,y),z.pixelStorei(R.UNPACK_IMAGE_HEIGHT,b),z.pixelStorei(R.UNPACK_SKIP_PIXELS,x),z.pixelStorei(R.UNPACK_SKIP_ROWS,S),z.pixelStorei(R.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&R.generateMipmap(v),z.unbindTexture()},this.initRenderTarget=function(e){B.get(e).__webglFramebuffer===void 0&&V.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?V.setTextureCube(e,0):e.isData3DTexture?V.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?V.setTexture2DArray(e,0):V.setTexture2D(e,0),z.unbindTexture()},this.resetState=function(){j=0,M=0,N=null,z.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return fo}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ho._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ho._getUnpackColorSpace()}},pg=e=>440*2**((e-69)/12);function mg(e,t,n,r,i,a=2.6){let o=pg(n),s=e.createGain(),c=e.createBiquadFilter();c.type=`lowpass`,c.frequency.value=Math.min(5200,900+o*2.2),c.Q.value=.3,s.connect(c).connect(t),s.gain.setValueAtTime(0,r),s.gain.linearRampToValueAtTime(i,r+.012),s.gain.exponentialRampToValueAtTime(i*.32,r+.35),s.gain.exponentialRampToValueAtTime(1e-4,r+a);for(let[t,n]of[[1,1],[2,.32],[3,.1],[4.02,.04]]){let i=e.createOscillator(),c=e.createGain();i.type=`sine`,i.frequency.value=o*t,i.detune.value=(Math.random()-.5)*4,c.gain.value=n,i.connect(c).connect(s),i.start(r),i.stop(r+a+.05),i.onended=()=>c.disconnect()}setTimeout(()=>s.disconnect(),(r-e.currentTime+a+.3)*1e3)}function hg(e,t,n,r,i,a=.03){let o=e.createGain(),s=e.createBiquadFilter();s.type=`lowpass`,s.frequency.value=900,o.connect(s).connect(t),o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(a,r+i*.4),o.gain.linearRampToValueAtTime(0,r+i);for(let t of n)for(let n of[-6,6]){let a=e.createOscillator();a.type=`sine`,a.frequency.value=pg(t),a.detune.value=n,a.connect(o),a.start(r),a.stop(r+i+.05)}setTimeout(()=>o.disconnect(),(r-e.currentTime+i+.3)*1e3)}function gg(e,t,n,r,i=.12){let a=pg(n),o=e.createGain();o.connect(t),o.gain.setValueAtTime(0,r),o.gain.linearRampToValueAtTime(i,r+.005),o.gain.exponentialRampToValueAtTime(1e-4,r+1.2);for(let[t,n]of[[1,1],[2.76,.25]]){let i=e.createOscillator(),s=e.createGain();i.frequency.value=a*t,s.gain.value=n,i.connect(s).connect(o),i.start(r),i.stop(r+1.25)}setTimeout(()=>o.disconnect(),(r-e.currentTime+1.5)*1e3)}var _g=null;function vg(e,t,n,r,i,a,o){if(!_g||_g.sampleRate!==e.sampleRate){_g=e.createBuffer(1,e.sampleRate*2,e.sampleRate);let t=_g.getChannelData(0);for(let e=0;e<t.length;e++)t[e]=Math.random()*2-1}let s=e.createBufferSource();s.buffer=_g;let c=e.createBiquadFilter();c.type=`bandpass`,c.Q.value=1.2,c.frequency.setValueAtTime(i,n),c.frequency.exponentialRampToValueAtTime(a,n+r);let l=e.createGain();l.gain.setValueAtTime(0,n),l.gain.linearRampToValueAtTime(o,n+r*.35),l.gain.linearRampToValueAtTime(0,n+r),s.connect(c).connect(l).connect(t),s.start(n),s.stop(n+r+.05),s.onended=()=>l.disconnect()}var yg=[{bass:41,tones:[57,60,64,65,69]},{bass:45,tones:[55,60,64,67,72]},{bass:46,tones:[57,62,65,69,70]},{bass:48,tones:[55,62,64,67,72]},{bass:50,tones:[57,60,65,69,72]},{bass:45,tones:[55,60,64,67,72]},{bass:46,tones:[57,62,65,69,70]},{bass:46,tones:[55,61,65,67,70]}],bg=[[0,2,1,3,4,3,2,1],[0,1,2,4,3,2,1,2],[1,2,3,4,2,3,1,0]],xg=60/66/2,Sg=class{constructor(e,t){this.ctx=e,this.dest=t,this.timer=0,this.step=0,this.next=0}start(){this.timer||(this.next=this.ctx.currentTime+.15,this.timer=window.setInterval(()=>this.schedule(),120),this.schedule())}stop(){clearInterval(this.timer),this.timer=0}schedule(){for(;this.next<this.ctx.currentTime+.7;)this.play(this.step,this.next),this.step++,this.next+=xg*(1+(this.step%2==1?.06:-.06))}play(e,t){let n=Math.floor(e/8),r=e%8,i=yg[n%yg.length],a=bg[Math.floor(n/yg.length)%bg.length];if(r===0&&(mg(this.ctx,this.dest,i.bass,t,.11,4),mg(this.ctx,this.dest,i.bass+12,t+.02,.05,3),hg(this.ctx,this.dest,i.tones.slice(0,3).map(e=>e-12),t,4.236363636363636)),r===4&&Math.random()<.5&&mg(this.ctx,this.dest,i.bass+7,t,.05,2.5),Math.random()<.86){let e=i.tones[a[r]];mg(this.ctx,this.dest,e,t,.045+Math.random()*.03)}if((r===0||r===5)&&Math.random()<.35){let e=i.tones[2+Math.floor(Math.random()*3)]+12;mg(this.ctx,this.dest,e,t+.01,.035,3.5)}}},Cg=[72,74,76,79,81,84,86,88],wg=class{constructor(){this.ctx=null,this.master=null,this.sfxBus=null,this.music=null,this.enabled=!1,this.suspendTimer=0,this.onVisibility=()=>{this.ctx&&this.enabled&&(document.hidden?(this.music?.stop(),this.ctx.suspend()):(this.ctx.resume(),this.music?.start()))},document.addEventListener(`visibilitychange`,this.onVisibility)}get on(){return this.enabled}setEnabled(e){if(this.enabled=e,clearTimeout(this.suspendTimer),e){let e=this.ensure();e.resume(),this.master.gain.cancelScheduledValues(e.currentTime),this.master.gain.setTargetAtTime(.7,e.currentTime,.4),this.music.start()}else this.ctx&&this.master&&(this.master.gain.setTargetAtTime(0,this.ctx.currentTime,.2),this.suspendTimer=window.setTimeout(()=>{this.music?.stop(),this.ctx?.suspend()},900))}play(e){if(!this.enabled||!this.ctx||!this.sfxBus)return;let t=this.ctx,n=this.sfxBus,r=t.currentTime+.01;switch(e){case`sparkle`:[0,2,4,5].forEach((e,i)=>gg(t,n,Cg[e]+12,r+i*.07,.07));break;case`bloom`:{let e=Math.floor(Math.random()*4);gg(t,n,Cg[e],r,.1),gg(t,n,Cg[e+2],r+.09,.08),gg(t,n,Cg[e+4],r+.18,.06);break}case`pop`:{let e=t.createOscillator(),i=t.createGain();e.frequency.setValueAtTime(320,r),e.frequency.exponentialRampToValueAtTime(760,r+.13),i.gain.setValueAtTime(1e-4,r),i.gain.exponentialRampToValueAtTime(.12,r+.02),i.gain.exponentialRampToValueAtTime(1e-4,r+.25),e.connect(i).connect(n),e.start(r),e.stop(r+.3),[2,4,6].forEach((e,i)=>gg(t,n,Cg[e]+12,r+.12+i*.08,.06));break}case`whoosh`:vg(t,n,r,1.6,300,2400,.18),[0,3,5,7].forEach((e,i)=>gg(t,n,Cg[e],r+.4+i*.12,.05));break;case`boop`:gg(t,n,81,r,.08),gg(t,n,88,r+.09,.07);break;case`page`:vg(t,n,r,.45,2500,5e3,.08)}}ensure(){if(this.ctx)return this.ctx;let e=new AudioContext,t=e.createGain();t.gain.value=0;let n=e.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,t.connect(n).connect(e.destination);let r=e.createConvolver();r.buffer=this.impulse(e,3.2);let i=e.createGain();i.gain.value=.45,r.connect(i).connect(t);let a=e.createGain();a.gain.value=.9,a.connect(t),a.connect(r);let o=e.createGain();return o.gain.value=.9,o.connect(t),o.connect(r),this.ctx=e,this.master=t,this.sfxBus=o,this.music=new Sg(e,a),e}impulse(e,t){let n=Math.floor(e.sampleRate*t),r=e.createBuffer(2,n,e.sampleRate);for(let e=0;e<2;e++){let t=r.getChannelData(e);for(let e=0;e<n;e++)t[e]=(Math.random()*2-1)*(1-e/n)**3}return r}dispose(){document.removeEventListener(`visibilitychange`,this.onVisibility),this.music?.stop(),this.ctx?.close()}},Tg=(e,t,n)=>({pos:new K(...e),target:new K(...t),portrait:n&&{pos:new K(...n.pos),target:new K(...n.target)}}),Eg=class{constructor(e,t){this.camera=e,this.motion=t,this.pos=new K,this.target=new K,this.pPos=new K,this.pTarget=new K,this.blend={w:0},this.look=new K,this.timeline=null,this.settle=null,this.pointer=new G,this.smooth=new G,this.v=new K,this.right=new K,this.up=new K,this.onPointer=e=>{e.pointerType===`mouse`&&this.pointer.set(e.clientX/window.innerWidth*2-1,-(e.clientY/window.innerHeight*2-1))},window.addEventListener(`pointermove`,this.onPointer,{passive:!0})}set(e){this.stop(),this.pos.copy(e.pos),this.target.copy(e.target),e.portrait&&(this.pPos.copy(e.portrait.pos),this.pTarget.copy(e.portrait.target)),this.blend.w=+!!e.portrait}fly(e,t,n=`power2.inOut`){return this.stop(),new Promise(r=>{this.settle=r,e.portrait&&this.blend.w===0&&(this.pPos.copy(this.pulledBack(this.v)),this.pTarget.copy(this.target));let i=H.timeline({onComplete:()=>this.finish()}).to(this.pos,{x:e.pos.x,y:e.pos.y,z:e.pos.z,duration:t,ease:n},0).to(this.target,{x:e.target.x,y:e.target.y,z:e.target.z,duration:t,ease:n},0).to(this.blend,{w:+!!e.portrait,duration:t,ease:n},0);if(e.portrait){let r=e.portrait;i.to(this.pPos,{x:r.pos.x,y:r.pos.y,z:r.pos.z,duration:t,ease:n},0).to(this.pTarget,{x:r.target.x,y:r.target.y,z:r.target.z,duration:t,ease:n},0)}this.timeline=i})}finish(){let e=this.settle;this.settle=null,this.timeline=null,e?.()}stop(){this.timeline?.kill(),this.finish()}update(e,t){let n=this.camera,r=n.aspect<1,i=r?50:42;if(n.fov!==i&&(n.fov=i,n.updateProjectionMatrix()),this.pulledBack(this.v),this.look.copy(this.target),r&&this.blend.w>0&&(this.v.lerp(this.pPos,this.blend.w),this.look.lerp(this.pTarget,this.blend.w)),!this.motion.reduced){this.smooth.lerp(this.pointer,1-Math.exp(-t*2.2)),this.right.subVectors(this.look,this.v).normalize().cross(n.up).normalize(),this.up.copy(n.up);let r=this.v.distanceTo(this.look),i=Math.min(.35,r*.03);this.v.addScaledVector(this.right,this.smooth.x*i),this.v.addScaledVector(this.up,this.smooth.y*i*.5+Math.sin(e*.35)*.04)}n.position.copy(this.v),n.lookAt(this.look)}pulledBack(e){let t=this.camera.aspect,n=t<1?1+(1-t)*.65:1;return e.copy(this.pos).sub(this.target).multiplyScalar(n).add(this.target)}dispose(){this.stop(),window.removeEventListener(`pointermove`,this.onPointer)}},Dg=class{constructor(){this.query=matchMedia(`(prefers-reduced-motion: reduce)`),this.forced=new URLSearchParams(location.search).get(`motion`)===`reduced`,this.onChange=e=>{this.reduced=this.forced||e.matches},this.reduced=this.forced||this.query.matches,this.query.addEventListener(`change`,this.onChange)}get amount(){return this.reduced?.35:1}dispose(){this.query.removeEventListener(`change`,this.onChange)}},Og=class{constructor(e,t){this.dom=e,this.camera=t,this.entries=[],this.ray=new Zf,this.ndc=new G,this.hovered=null,this.down=null,this.onMove=e=>{e.pointerType===`mouse`&&this.setHovered(this.pick(e.clientX,e.clientY))},this.onDown=e=>{this.down={x:e.clientX,y:e.clientY,t:performance.now()}},this.onUp=e=>{let t=this.down;if(this.down=null,!t||Math.hypot(e.clientX-t.x,e.clientY-t.y)>12||performance.now()-t.t>900)return;let n=this.pick(e.clientX,e.clientY);n&&(e.pointerType!==`mouse`&&(n.onHover?.(!0),setTimeout(()=>n.onHover?.(!1),450)),n.onClick())},this.onLeave=()=>this.setHovered(null),e.addEventListener(`pointermove`,this.onMove),e.addEventListener(`pointerdown`,this.onDown),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointerleave`,this.onLeave)}add(e,t){let n={proxy:e,enabled:!0,...t};return this.entries.push(n),{setEnabled:e=>{n.enabled=e,!e&&this.hovered===n&&this.setHovered(null)},remove:()=>{this.hovered===n&&this.setHovered(null);let e=this.entries.indexOf(n);e>=0&&this.entries.splice(e,1)}}}pick(e,t){let n=this.entries.filter(e=>e.enabled&&kg(e.proxy));if(n.length===0)return null;let r=this.dom.getBoundingClientRect();this.ndc.set((e-r.left)/r.width*2-1,-((t-r.top)/r.height)*2+1),this.ray.setFromCamera(this.ndc,this.camera);let i=this.ray.intersectObjects(n.map(e=>e.proxy),!1)[0];return i?n.find(e=>e.proxy===i.object)??null:null}setHovered(e){e!==this.hovered&&(this.hovered?.onHover?.(!1),this.hovered=e,e?.onHover?.(!0),this.dom.style.cursor=e?`pointer`:``)}dispose(){this.dom.removeEventListener(`pointermove`,this.onMove),this.dom.removeEventListener(`pointerdown`,this.onDown),this.dom.removeEventListener(`pointerup`,this.onUp),this.dom.removeEventListener(`pointerleave`,this.onLeave),this.entries.length=0}};function kg(e){for(let t=e.parent;t;t=t.parent)if(!t.visible)return!1;return!0}var Ag={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},jg=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Mg=new kf(-1,1,1,-1,0,1),Ng=new class extends Nc{constructor(){super(),this.setAttribute(`position`,new X([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new X([0,2,0,0,2,0],2))}},Pg=class{constructor(e){this._mesh=new Z(Ng,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Mg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Fg=class extends jg{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zd?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Id.clone(e.uniforms),this.material=new zd({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pg(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Ig=class extends jg{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Lg=class extends jg{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Rg=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new G);this._width=n.width,this._height=n.height,t=new ts(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$i}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fg(Ag),this.copyPass.material.blending=0,this.timer=new If}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Ig!==void 0&&(r instanceof Ig?n=!0:r instanceof Lg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new G);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},zg=class extends jg{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Y}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},Bg={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Y(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Vg=class e extends jg{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new G(256,256):new G(e.x,e.y),this.clearColor=new Y(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ts(i,a,{type:$i,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new ts(i,a,{type:$i,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new ts(i,a,{type:$i,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=Bg;this.highPassUniforms=Id.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zd({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new G(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1),new K(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Id.clone(Ag.uniforms),this.blendMaterial=new zd({uniforms:this.copyUniforms,vertexShader:Ag.vertexShader,fragmentShader:Ag.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Y,this._oldClearAlpha=1,this._basic=new dl,this._fsQuad=new Pg(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new G(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new zd({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new G(.5,.5)},direction:{value:new G(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new zd({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Vg.BlurDirectionX=new G(1,0),Vg.BlurDirectionY=new G(0,1);var Hg=class extends Vg{constructor(e,t,n,r,i){super(e,t,n,r),this.scale=i,this.lastW=1,this.lastH=1}setSize(e,t){this.lastW=e,this.lastH=t,super.setSize(Math.max(2,Math.round(e*this.scale)),Math.max(2,Math.round(t*this.scale)))}setScale(e){this.scale=e,this.setSize(this.lastW,this.lastH)}},Ug={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Wg=class extends jg{constructor(){super(),this.isOutputPass=!0,this.uniforms=Id.clone(Ug.uniforms),this.material=new Bd({name:Ug.name,uniforms:this.uniforms,vertexShader:Ug.vertexShader,fragmentShader:Ug.fragmentShader}),this._fsQuad=new Pg(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ho.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Gg=class extends Bs{constructor(){super(),this.name=`RoomEnvironment`,this.position.y=-3.5;let e=new $l;e.deleteAttribute(`uv`);let t=new Vd({side:1}),n=new Vd,r=new Of(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let i=new Z(e,t);i.position.set(-.757,13.219,.717),i.scale.set(31.713,28.305,28.591),this.add(i);let a=new Pl(e,n,6),o=new js;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let s=new Z(e,Kg(50));s.position.set(-16.116,14.37,8.208),s.scale.set(.1,2.428,2.739),this.add(s);let c=new Z(e,Kg(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let l=new Z(e,Kg(17));l.position.set(14.904,12.198,-1.832),l.scale.set(.15,4.265,6.331),this.add(l);let u=new Z(e,Kg(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Z(e,Kg(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Z(e,Kg(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Kg(e){return new Ud({color:0,emissive:16777215,emissiveIntensity:e})}function qg(e){e.traverse(e=>{(e instanceof Z||e instanceof Kl||e instanceof il)&&(e.geometry?.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(Jg))})}function Jg(e){if(e){for(let t of Object.values(e))t instanceof Qo&&t.dispose();e.dispose()}}var Yg=class{constructor(e,t,n={}){this.container=e,this.tier=t,this.scene=new Bs,this.composer=null,this.bloom=null,this.ticks=new Set,this.timer=new If,this.raf=0,this.perf={time:0,frames:0,windows:0,settled:!1},this.resize=()=>{let e=this.container.clientWidth||window.innerWidth,t=this.container.clientHeight||window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(e,t,!1),this.composer&&(this.composer.setPixelRatio(this.pixelRatio),this.composer.setSize(e,t))};let r=t!==`low`;this.samples=n.samples??4,this.renderer=new fg({antialias:!r,powerPreference:`high-performance`,alpha:!1}),this.renderer.outputColorSpace=ao,this.renderer.toneMapping=7,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=t!==`low`,this.renderer.shadowMap.type=1,this.pixelRatio=Math.min(window.devicePixelRatio||1,t===`high`?2:t===`medium`?1.5:1),this.renderer.setPixelRatio(this.pixelRatio);let i=this.renderer.domElement;i.className=`scene-canvas`,i.setAttribute(`role`,`img`),i.setAttribute(`aria-label`,`A floating 3D garden in the clouds, with a little blue robot companion.`),e.prepend(i),this.camera=new Ef(42,1,.1,700);let a=new Cp(this.renderer),o=new Gg;if(this.env=a.fromScene(o,.04).texture,o.dispose(),a.dispose(),this.scene.environment=this.env,this.scene.environmentIntensity=.42,r){let e=new ts(1,1,{type:$i,samples:this.samples});this.composer=new Rg(this.renderer,e),this.composer.addPass(new zg(this.scene,this.camera));let t=n.bloom??{};this.bloom=new Hg(new G(256,256),t.strength??.32,t.radius??.45,t.threshold??1.2,n.bloomScale??.5),this.composer.addPass(this.bloom),this.composer.addPass(new Wg)}this.timer.connect(document),window.addEventListener(`resize`,this.resize),this.resize()}get currentPixelRatio(){return this.pixelRatio}setBloomScale(e){this.bloom?.setScale(e)}setSamples(e){if(this.composer){this.samples=e;for(let t of[this.composer.renderTarget1,this.composer.renderTarget2])t.samples=e,t.dispose()}}onTick(e){return this.ticks.add(e),()=>this.ticks.delete(e)}async compile(){await this.renderer.compileAsync(this.scene,this.camera),this.render()}start(){let e=t=>{this.raf=requestAnimationFrame(e),this.timer.update(t);let n=this.timer.getDelta(),r=Math.min(n,1/20),i=this.timer.getElapsed();this.ticks.forEach(e=>e(i,r)),this.render(),this.watchPerformance(n)};this.raf=requestAnimationFrame(e)}render(){this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)}watchPerformance(e){if(this.perf.settled||e>.5||(this.perf.time+=e,this.perf.frames++,this.perf.time<2.5))return;let t=this.perf.time/this.perf.frames;this.perf.time=0,this.perf.frames=0,this.perf.windows++,this.perf.windows<2||t>.25||(t>1/40?this.composer&&this.samples>2?this.setSamples(2):this.pixelRatio>1.01?(this.pixelRatio=Math.max(1,this.pixelRatio-.25),this.resize()):this.bloom?.enabled?this.bloom.enabled=!1:this.perf.settled=!0:this.perf.windows>12&&(this.perf.settled=!0))}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener(`resize`,this.resize),this.ticks.clear(),this.timer.dispose(),qg(this.scene),this.env.dispose(),this.composer?.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}},$={ivory:`#FAF8F1`,sky:`#A9D6EB`,powder:`#C7E5F2`,sage:`#A7B99A`,yellow:`#F5DF9B`,pink:`#E8BFC0`,robotBlue:`#7FBCE2`,deepSage:`#8DA383`,leaf:`#B9CAA7`,soil:`#E2C3A0`,soilDeep:`#CDA88E`,rock:`#B9A6A8`,stone:`#ECE5D8`,trunk:`#CDAE90`,gold:`#E9C878`,lilac:`#D5C5E8`,peach:`#F5C8A9`,rose:`#F0A9B5`,bluebell:`#9CCBEA`,ink:`#4E4A47`},Xg=[$.pink,$.yellow,$.ivory,$.powder,$.lilac,$.peach,$.rose,$.bluebell];function Zg(e,t,n=0){let r=e/2,i=new Iu;return i.moveTo(n-r,0),i.lineTo(n+r,0),i.lineTo(n+r,t-r),i.absarc(n,t-r,r,0,Math.PI,!1),i.lineTo(n-r,0),i}function Qg(e,t,n=5){let r=new Iu;for(let i=0;i<=n*2;i++){let a=i%2==0?e:t,o=i/(n*2)*Math.PI*2+Math.PI/2,s=Math.cos(o)*a,c=Math.sin(o)*a;i===0?r.moveTo(s,c):r.lineTo(s,c)}return r}var $g=null,e_=null;function t_(e,t=128){let n=document.createElement(`canvas`);n.width=n.height=t;let r=n.getContext(`2d`),i=r.createRadialGradient(t/2,t/2,0,t/2,t/2,t/2);e.forEach(([e,t])=>i.addColorStop(e,t)),r.fillStyle=i,r.fillRect(0,0,t,t);let a=new Yl(n);return a.colorSpace=ao,a}function n_(){return $g??($g=t_([[0,`rgba(255,255,255,1)`],[.25,`rgba(255,255,255,0.55)`],[.6,`rgba(255,255,255,0.12)`],[1,`rgba(255,255,255,0)`]])),$g}function r_(){return e_??(e_=t_([[0,`rgba(70,80,90,0.6)`],[.5,`rgba(70,80,90,0.25)`],[1,`rgba(70,80,90,0)`]])),e_}function i_(){$g?.dispose(),e_?.dispose(),$g=e_=null}var a_=.34,o_=(e,t)=>new Y(e).multiplyScalar(t),s_=class{constructor(e){this.motion=e,this.root=new J,this.speechAnchor=new js,this.lift=new J,this.body=new J,this.eyes=new J,this.happyEyes=new J,this.armL=new J,this.armR=new J,this.yaw=0,this.arc=0,this.facing=null,this.busy=!1,this.waving=!1,this.nextBlink=2,this.jump={y:0,spin:0},this.tmp=new K,this.tmp2=new K;let t=new Hd({color:$.robotBlue,roughness:.32,clearcoat:.7,clearcoatRoughness:.25}),n=new Vd({color:$.ivory,roughness:.45}),r=new Vd({color:$.yellow,roughness:.4}),i=new Z(new wd([[0,0],[.22,.012],[.37,.07],[.455,.19],[.47,.34],[.445,.5],[.385,.63],[.29,.73],[.16,.79],[0,.805]].map(([e,t])=>new G(e,t)),56),t);i.castShadow=!0;let a=new Z(new Od(1,40,24),new Hd({color:`#26334F`,roughness:.18,clearcoat:1,clearcoatRoughness:.08}));a.scale.set(.29,.21,.13),a.position.set(0,.45,.335);let o=new Z(new kd(1,.075,12,48),n);o.scale.set(.3,.22,.25),o.position.set(0,.45,.35);let s=new dl({color:o_(`#C9F4FF`,2.2),toneMapped:!1}),c=new tu(.042,24),l=new tu(.012,12),u=new dl({color:o_(`#FFFFFF`,3),toneMapped:!1});for(let e of[-1,1]){let t=new Z(c,s);t.scale.set(.82,1.15,1),t.position.set(e*.098,0,.462),t.rotation.y=e*.32;let n=new Z(l,u);n.position.set(e*.098+.014,.023,.466),n.rotation.y=e*.32,this.eyes.add(t,n);let r=new Z(new kd(.036,.011,8,20,Math.PI),s);r.position.set(e*.098,-.015,.462),r.rotation.y=e*.32,this.happyEyes.add(r);let i=new Z(new tu(.03,20),new dl({color:o_($.pink,1.15),transparent:!0,opacity:.85,toneMapped:!1}));i.scale.set(1.3,.75,1),i.position.set(e*.175,.405,.43),i.rotation.y=e*.6,this.body.add(i)}this.eyes.position.y=.465,this.happyEyes.position.y=.465,this.happyEyes.visible=!1;let d=new Z(new kd(.026,.008,8,16,Math.PI),new dl({color:o_(`#FFD3D8`,1.6),toneMapped:!1}));d.rotation.z=Math.PI,d.position.set(0,.395,.462);for(let e of[-1,1]){let t=new Z(new nu(.105,.105,.075,28),n);t.rotation.z=Math.PI/2,t.position.set(e*.452,.45,0);let i=new Z(new nu(.06,.06,.03,24),r);i.rotation.z=Math.PI/2,i.position.set(e*.5,.45,0),t.castShadow=!0,this.body.add(t,i)}let f=new Z(new nu(.011,.014,.17,8),n);f.position.set(0,.88,0);let p=new Z(new Od(.03,16,12),n);p.position.set(0,.8,0);let m=new bd(Qg(.065,.03),{depth:.018,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2});m.center(),this.star=new Z(m,new Vd({color:$.yellow,emissive:`#FFD670`,emissiveIntensity:1.6,roughness:.35})),this.star.position.set(0,1,0);let h=new Z(new tu(.022,16),new dl({color:o_(`#BFE6B0`,2),toneMapped:!1}));h.position.set(0,.19,.448),h.rotation.x=-.3;for(let[e,r]of[[this.armL,-1],[this.armR,1]]){e.position.set(r*.43,.3,.02);let i=new Z(new eu(.055,.12,6,14),t);i.position.set(r*.04,-.1,0),i.rotation.z=r*.25;let a=new Z(new Od(.06,18,12),n);a.position.set(r*.07,-.2,0),i.castShadow=a.castShadow=!0,e.add(i,a),e.rotation.z=r*.15}this.ring=new Z(new kd(.2,.022,10,40),new dl({color:o_($.sky,2.2),transparent:!0,toneMapped:!1})),this.ring.rotation.x=Math.PI/2,this.ring.position.y=-.05,this.body.add(i,a,o,this.eyes,this.happyEyes,d,f,p,this.star,h,this.armL,this.armR,this.ring),this.lift.add(this.body),this.lift.position.y=a_,this.shadow=new Z(new tu(.5,32),new dl({map:r_(),transparent:!0,depthWrite:!1,opacity:.8})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.02,this.shadow.renderOrder=1,this.proxy=new Z(new Od(.62,12,8),new dl({visible:!1})),this.proxy.position.y=.76,this.speechAnchor.position.y=1.4600000000000002,this.root.add(this.lift,this.shadow,this.proxy,this.speechAnchor),this.root.scale.setScalar(1.1)}teleport(e){H.killTweensOf(this.root.position),this.arc=0,this.root.position.copy(e)}moveTo(e,t=2.4){let n=this.root.position.clone(),r={t:0};return this.facing=e.clone(),H.killTweensOf(this.root.position),new Promise(i=>{H.to(r,{t:1,duration:this.motion.reduced?Math.min(t,1.2):t,ease:`power1.inOut`,onUpdate:()=>{this.arc=Math.sin(r.t*Math.PI)*.6,this.root.position.lerpVectors(n,e,r.t),this.root.position.y+=this.arc},onComplete:()=>{this.arc=0,this.facing=null,i()}})})}lookAt(e){this.facing=e?e.clone():null}wave(e=2){if(this.waving)return;this.waving=!0;let t=this.armR.rotation;H.timeline({onComplete:()=>void(this.waving=!1)}).to(t,{z:2.5,x:-.2,duration:.45,ease:`back.out(1.6)`}).to(t,{z:2,duration:.28,ease:`sine.inOut`,repeat:e*2-1,yoyo:!0}).to(t,{z:.15,x:0,duration:.5,ease:`power2.inOut`})}react(){if(this.busy)return;this.busy=!0,this.setHappy(!0);let e=this.motion.reduced;H.timeline({onComplete:()=>{this.busy=!1,this.setHappy(!1)}}).to(this.jump,{y:e?.08:.42,duration:.32,ease:`power2.out`}).to(this.jump,{spin:e?0:Math.PI*2,duration:.7,ease:`power2.inOut`},0).to([this.armL.rotation,this.armR.rotation],{z:e=>e===0?-1.4:1.4,duration:.25},0).to(this.jump,{y:0,duration:.55,ease:`bounce.out`},.32).to([this.armL.rotation,this.armR.rotation],{z:e=>e===0?-.15:.15,duration:.4},.6).set(this.jump,{spin:0}).to({},{duration:.5})}setHappy(e){this.happyEyes.visible=e,this.eyes.visible=!e}blink(){this.eyes.visible&&H.timeline().to(this.eyes.scale,{y:.1,duration:.07,ease:`power1.in`}).to(this.eyes.scale,{y:1,duration:.11,ease:`power1.out`})}update(e,t,n){let r=this.motion.amount;this.lift.position.y=a_+Math.sin(e*2.1)*.05*r+this.jump.y,this.body.rotation.z=Math.sin(e*.9)*.05*r,this.body.rotation.x=Math.sin(e*.7+1)*.03*r,this.star.rotation.y=e*1.2,this.ring.material.opacity=.55+.35*Math.sin(e*3.2);let i=this.facing??n.getWorldPosition(this.tmp2);this.root.getWorldPosition(this.tmp);let a=Math.atan2(i.x-this.tmp.x,i.z-this.tmp.z)-this.yaw;a=Math.atan2(Math.sin(a),Math.cos(a)),this.yaw+=a*Math.min(1,t*3),this.body.rotation.y=this.yaw-this.root.rotation.y+this.jump.spin,!this.waving&&!this.busy&&(this.armL.rotation.z=-.15-Math.sin(e*1.6)*.06*r,this.armR.rotation.z=.15+Math.sin(e*1.6+.6)*.06*r);let o=this.lift.position.y-a_+this.arc,s=1-Math.min(.55,Math.max(0,o)*.9);this.shadow.position.y=.02-this.arc/this.root.scale.y,this.shadow.scale.setScalar(s),this.shadow.material.opacity=.75*s,this.nextBlink-=t,this.nextBlink<=0&&(this.blink(),this.nextBlink=2.2+Math.random()*3.5,Math.random()<.2&&setTimeout(()=>this.blink(),260))}},c_={door:{id:`door`,label:`打开魔法门`,message:`A door full of happiness! 🚪`},pocket:{id:`pocket`,label:`打开惊喜口袋`,message:`Surprise gift opened! 🎁`},water:{id:`water`,label:`喝一杯温水`,message:`Good choice! Drink some warm water! 🍵`},sunny:{id:`sunny`,label:`Sunny 的加油`,message:`Sunny 给你打气！💙`},sunshine:{id:`sunshine`,label:`收集阳光`,message:`A little more sunshine! ☀️`},sunflower:{id:`sunflower`,label:`向日葵`,message:`向日葵送你满满的阳光 🌻`},gerbera:{id:`gerbera`,label:`非洲菊`,message:`非洲菊：今天也要开开心心！🌸`},tulip:{id:`tulip`,label:`郁金香`,message:`郁金香：温柔地慢慢好起来 🌷`},chamomile:{id:`chamomile`,label:`洋甘菊`,message:`洋甘菊：好好休息，睡个好觉 🌼`},carnation:{id:`carnation`,label:`康乃馨`,message:`康乃馨：谢谢你一直以来的照顾 💗`}},l_=[`sunflower`,`gerbera`,`tulip`,`chamomile`,`carnation`],u_=10,d_=100,f_=[[0,`Mission Started!`],[10,`A little better!`],[30,`You're getting stronger!`],[50,`Halfway there!`],[80,`Almost there!`],[100,`Fully Recovered! Mission Accomplished!`]];function p_(e){let t=f_[0][1];for(let[n,r]of f_)e>=n&&(t=r);return t}var m_=new class{constructor(){this.done=new Set,this.listeners=new Set,this.resetListeners=new Set,this.celebrated=!1}get progress(){return Math.min(d_,this.done.size*u_)}get completed(){return this.progress>=d_}has(e){return this.done.has(e)}get record(){return[...this.done]}award(e){if(this.done.has(e)||this.completed)return!1;this.done.add(e);let t=this.progress,n=f_.find(([e])=>e===t)?.[1]??null,r=this.completed,i={activity:c_[e],progress:t,milestone:n,completed:r};return this.listeners.forEach(e=>e(i)),!0}claimCelebration(){return!this.completed||this.celebrated?!1:(this.celebrated=!0,!0)}onAward(e){this.listeners.add(e)}onReset(e){this.resetListeners.add(e)}reset(){this.done.clear(),this.celebrated=!1,this.resetListeners.forEach(e=>e())}},h_=[[`door`,`🚪 打开魔法门`],[`pocket`,`🎁 打开惊喜口袋`],[`water`,`🍵 口袋旁的温水`],[`sunny`,`💙 点一下 Sunny`],[`sunshine`,`☀️ 点亮一朵愿望花`],[`sunflower`,`🌻 向日葵`],[`gerbera`,`🌸 非洲菊`],[`tulip`,`🌷 郁金香`],[`chamomile`,`🌼 洋甘菊`],[`carnation`,`🌺 康乃馨`]],g_=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches||new URLSearchParams(location.search).get(`motion`)===`reduced`,__,v_,y_=0,b_=0;function x_(e){let t=Math.round(e);__.querySelector(`.guest-pct`).textContent=String(t),__.querySelector(`.guest-fill`).style.transform=`scaleX(${e/100})`,__.querySelector(`.guest-bar`).setAttribute(`aria-valuenow`,String(t)),v_.querySelector(`.guest-badge-pct`).textContent=`${t}%`,v_.querySelector(`.guest-badge-fill`).style.transform=`scaleX(${e/100})`,v_.setAttribute(`aria-label`,`Recovery card, ${t}%`)}function S_(){let e=__.querySelector(`.guest-tasks`);e.innerHTML=h_.map(([e,t])=>{let n=m_.has(e);return`<li class="${n?`is-done`:``}" aria-label="${c_[e].label}${n?`，已完成`:`，未完成`}"><span aria-hidden="true">${n?`✓`:`○`}</span> ${t}</li>`}).join(``)}function C_(){S_();let e=m_.progress;if(__.querySelector(`.guest-quote`).textContent=`“${p_(e)}”`,cancelAnimationFrame(b_),g_()){y_=e,x_(y_);return}let t=y_,n=performance.now(),r=i=>{let a=Math.min(1,(i-n)/700);y_=t+(e-t)*(1-(1-a)**3),x_(y_),a<1&&(b_=requestAnimationFrame(r))};b_=requestAnimationFrame(r)}function w_(){for(let e of[v_,__])e.classList.remove(`is-glowing`),e.offsetWidth,e.classList.add(`is-glowing`)}function T_(){if(document.getElementById(`guest-card`))return;__=document.createElement(`section`),__.id=`guest-card`,__.className=`guest-card`,__.setAttribute(`aria-label`,`Recovery card`),__.innerHTML=`
    <button class="guest-close" type="button" aria-label="收起卡片">×</button>
    <p class="guest-kicker">SPECIAL GUEST</p>
    <h2 class="guest-name">Dr Yeap</h2>
    <dl class="guest-facts">
      <div><dt>Mission</dt><dd>Recover 100%</dd></div>
      <div><dt>Recovery Progress</dt><dd><span class="guest-pct">0</span>%</dd></div>
    </dl>
    <div class="guest-bar" role="progressbar" aria-label="Recovery progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
      <span class="guest-fill"></span>
    </div>
    <p class="guest-quote"></p>
    <p class="guest-tasks-title">每项 +10%，集满 10 项就满血复活：</p>
    <ul class="guest-tasks"></ul>`,v_=document.createElement(`button`),v_.type=`button`,v_.className=`guest-badge`,v_.setAttribute(`aria-expanded`,`true`),v_.setAttribute(`aria-controls`,`guest-card`),v_.innerHTML=`<span class="guest-badge-star" aria-hidden="true">★</span><span class="guest-badge-label"> Recovery ·</span> <span class="guest-badge-pct">0%</span><span class="guest-badge-bar" aria-hidden="true"><span class="guest-badge-fill"></span></span>`;let e=()=>{__.classList.add(`is-open`),v_.setAttribute(`aria-expanded`,`true`)},t=()=>{__.classList.remove(`is-open`),v_.setAttribute(`aria-expanded`,`false`)};__.querySelector(`.guest-close`).addEventListener(`click`,t),v_.addEventListener(`click`,()=>__.classList.contains(`is-open`)?t():e());let n=!1;document.addEventListener(`click`,e=>{e.target?.closest?.(`.panel button`)&&(n=!0,t())},!0),m_.onAward(C_),m_.onReset(()=>{y_=0,C_()}),document.body.append(__,v_),x_(0),C_();let r=()=>{n||e()},i=()=>document.querySelector(`.loader`)?setTimeout(i,200):setTimeout(r,600);i()}function E_(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Nc;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=D_(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=D_(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function D_(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new yc(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var O_=new Y;function k_(e,t){return A_(e,t,t,0,1)}function A_(e,t,n,r,i){let a=e.attributes.position,o=new Float32Array(a.count*3),s=new Y(t),c=new Y(n);for(let e=0;e<a.count;e++){let t=Math.min(1,Math.max(0,(a.getY(e)-r)/(i-r||1)));O_.copy(s).lerp(c,t),o[e*3]=O_.r,o[e*3+1]=O_.g,o[e*3+2]=O_.b}return e.setAttribute(`color`,new X(o,3)),e}function j_(e,t,n=.78){e.computeBoundingBox();let r=e.boundingBox,i=new Y(t);return A_(e,i.clone().multiplyScalar(n),i,r.min.y,r.max.y)}function M_(e,t,n=0){let r=e.attributes.position;for(let e=0;e<r.count;e++){let i=r.getX(e),a=r.getY(e),o=r.getZ(e),s=Math.sin(i*4.1+n)*Math.cos(a*3.7+n*1.3)+Math.sin(o*5.3+a*2.1+n*.7)*.6,c=Math.hypot(i,a,o)||1,l=1+s*t/c;r.setXYZ(e,i*l,a*l,o*l)}return r.needsUpdate=!0,e}function N_(e){let t=e.map(e=>{let t=e.index?e.toNonIndexed():e;t!==e&&e.dispose();for(let e of Object.keys(t.attributes))e!==`position`&&e!==`normal`&&e!==`color`&&t.deleteAttribute(e);return t}),n=E_(t,!1);if(t.forEach(e=>e.dispose()),!n)throw Error(`mergeAll: incompatible geometries`);return n.computeBoundingSphere(),n}var P_=1.72,F_=2.92,I_=1.16,L_=2.52,R_=.26,z_=`
  varying vec2 vUv;
  void main() {
    vUv = position.xy;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,B_=`
  uniform float uTime;
  uniform float uOpen;
  varying vec2 vUv;
  void main() {
    vec2 p = vec2(vUv.x / ${(I_/2).toFixed(3)}, (vUv.y - ${(L_*.55).toFixed(3)}) / ${(L_*.5).toFixed(3)});
    float r = length(p);
    float a = atan(p.y, p.x);
    float swirl = 0.5 + 0.5 * sin(a * 3.0 + r * 6.0 - uTime * 1.4);
    float swirl2 = 0.5 + 0.5 * sin(a * -2.0 + r * 9.0 + uTime * 0.9);
    vec3 ivory = vec3(1.0, 0.97, 0.9);
    vec3 gold = vec3(1.0, 0.85, 0.55);
    vec3 pink = vec3(1.0, 0.78, 0.8);
    vec3 sky = vec3(0.75, 0.9, 1.0);
    vec3 col = mix(gold, pink, swirl * 0.6);
    col = mix(col, sky, swirl2 * 0.35 * smoothstep(0.2, 1.0, r));
    col = mix(ivory, col, smoothstep(0.0, 0.85, r));
    float bright = 1.2 + 1.3 * (1.0 - smoothstep(0.0, 1.0, r));
    gl_FragColor = vec4(col * bright * uOpen, 1.0);
    #include <colorspace_fragment>
  }
`,V_=class{constructor(e){this.motion=e,this.group=new J,this.pivot=new J,this.orbs=[],this.glowState={hover:0,open:0};let t=new Vd({vertexColors:!0,roughness:.85}),n=new Z(N_([j_(new nu(1.25,1.35,.16,40).translate(0,.08,0),$.stone,.82),j_(new nu(.98,1.05,.1,40).translate(0,.21,0),`#F3EEE3`,.88)]),t);n.receiveShadow=n.castShadow=!0;let r=Zg(P_,F_);r.holes.push(Zg(I_,L_));let i=new bd(r,{depth:.24,bevelEnabled:!0,bevelThickness:.04,bevelSize:.04,bevelSegments:3,curveSegments:40});i.translate(0,R_,-.12),this.frameMat=new Vd({color:$.yellow,roughness:.45,metalness:.05,emissive:`#FFE2A0`,emissiveIntensity:0});let a=new Z(i,this.frameMat);a.castShadow=a.receiveShadow=!0;let o=new J,s=new Vd({color:`#F7D77E`,emissive:`#FFD27A`,emissiveIntensity:.9,roughness:.4}),c=new Z(new nu(.15,.15,.06,32),s);c.rotation.x=Math.PI/2,o.add(c);for(let e=0;e<10;e++){let t=new Z(new $l(.035,.09,.04),s),n=e/10*Math.PI*2;t.position.set(Math.cos(n)*.22,Math.sin(n)*.22,0),t.rotation.z=n-Math.PI/2,o.add(t)}o.position.set(0,3.2399999999999998,.06);let l=new Z(new bd(Zg(1.1199999999999999,2.5,1.1199999999999999/2),{depth:.07,bevelEnabled:!0,bevelThickness:.015,bevelSize:.015,bevelSegments:2,curveSegments:40}),new Vd({color:`#9CCDE6`,roughness:.5}));l.castShadow=!0;let u=1.1199999999999999,d=new Vd({color:$.ivory,roughness:.5}),f=((e,t,n,r)=>{let i=new Z(new bd(Zg(e,t,n),{depth:.02,bevelEnabled:!1,curveSegments:24}),new Vd({color:`#B5DBEE`,roughness:.5}));return i.position.set(0,r,.085),i})(u*.62,.7,u/2,.18),p=L_*.67,m=new Z(new kd(.21,.035,14,40),new Vd({color:$.gold,roughness:.3,metalness:.6}));m.position.set(u/2,p,.095),this.window=new Vd({color:`#FFF6DD`,emissive:`#FFE4A8`,emissiveIntensity:.9,roughness:.15});let h=new Z(new tu(.2,40),this.window);h.position.set(u/2,p,.09);let g=new Z(new Ed(Qg(.11,.05)),new dl({color:new Y($.yellow).multiplyScalar(1.6),toneMapped:!1}));g.position.set(u/2,p,.096);let _=new Z(new Od(.055,20,14),new Vd({color:$.gold,roughness:.25,metalness:.7}));_.position.set(.9799999999999999,L_*.42,.12);let v=[.5,1.82].map(e=>{let t=new Z(new nu(.025,.025,.16,10),d);return t.position.set(.01,e,.04),t});this.pivot.add(l,f,m,h,g,_,...v),this.pivot.position.set(-1.16/2+.02,R_,-.04),this.portal=new Z(new Ed(Zg(I_,L_),40),new zd({uniforms:{uTime:{value:0},uOpen:{value:0}},vertexShader:z_,fragmentShader:B_,side:2,fog:!1})),this.portal.position.set(0,R_,-.07),this.portal.visible=!1,this.halo=new Z(new Td(4.4,4.8),new dl({map:n_(),color:new Y(`#FFE7B0`),transparent:!0,opacity:.18,blending:2,depthWrite:!1})),this.halo.position.set(0,1.76,-.3);let y=this.vines(),b=new dl({color:new Y($.yellow).multiplyScalar(2.6),toneMapped:!1});for(let e=0;e<7;e++){let e=new Z(new Od(.03,10,8),b);this.orbs.push(e)}this.proxy=new Z(new $l(2.02,3.52,.9),new dl({visible:!1})),this.proxy.position.y=1.72,this.group.add(n,a,o,this.pivot,this.portal,this.halo,y,...this.orbs,this.proxy)}vines(){let e=[],t=[$.sage,`#9DB48F`,`#B4C7A2`],n=[$.pink,$.ivory,`#F3B9C1`,$.lilac],r=.89,i=[];for(let e=0;e<9;e++)i.push([-.89,.41000000000000003+e*.2,e*.7%1]);for(let e=0;e<=8;e++){let t=Math.PI-e/8*Math.PI*.55;i.push([Math.cos(t)*r,3.1799999999999997-P_/2+Math.sin(t)*r,e*.37%1])}for(let e=0;e<4;e++)i.push([r,.41000000000000003+e*.22,e*.53%1]);i.forEach(([r,i,a],o)=>{let s=new Od(.075,8,5).scale(.5,.14,1).translate(0,0,.07);if(s.rotateX(-.4).rotateY(o*2.4).rotateZ(a-.5),e.push(k_(s,t[o%t.length]).translate(r,i,.12)),o%2==0){let t=new Od(.055,10,8).scale(1,.75,1);e.push(k_(t,n[o%n.length]).translate(r+(a-.5)*.08,i+.05,.16)),e.push(k_(new Od(.022,8,6),`#F2C760`).translate(r+(a-.5)*.08,i+.07,.205))}});let a=new Z(N_(e),new Vd({vertexColors:!0,roughness:.6}));return a.castShadow=!0,a}setHover(e){H.to(this.glowState,{hover:+!!e,duration:.45,ease:`sine.out`,overwrite:!0})}open(){this.portal.visible=!0;let e=this.motion.reduced;return new Promise(t=>{H.timeline({onComplete:()=>t()}).to(this.pivot.rotation,{y:-.08,duration:.25,ease:`sine.out`}).to(this.pivot.rotation,{y:1.95,duration:e?.8:1.5,ease:`power2.inOut`}).to(this.glowState,{open:1,duration:1.2,ease:`sine.inOut`},.3).to(this.portal.material.uniforms.uOpen,{value:1,duration:1,ease:`sine.out`},.25)})}reset(){H.killTweensOf([this.pivot.rotation,this.glowState,this.portal.material.uniforms.uOpen]),this.pivot.rotation.y=0,this.glowState.open=0,this.glowState.hover=0,this.portal.material.uniforms.uOpen.value=0,this.portal.visible=!1}doorway(e=new K){return this.group.localToWorld(e.set(0,1.52,0))}update(e){let{hover:t,open:n}=this.glowState,r=.5+.5*Math.sin(e*2);this.frameMat.emissiveIntensity=t*(.32+r*.12)+n*.2,this.halo.material.opacity=.16+r*.05+t*.4+n*.55,this.window.emissiveIntensity=.8+t*.8+r*.2,this.portal.material.uniforms.uTime.value=e;let i=this.motion.amount;this.orbs.forEach((n,r)=>{let a=e*.45*i+r/this.orbs.length*Math.PI*2;n.position.set(Math.cos(a)*1.25,1.81+Math.sin(a)*1.75,.35+Math.sin(a*2+r)*.15),n.scale.setScalar(.8+t*.6+.3*Math.sin(e*3+r))})}},H_=.42,U_=1.55,W_=class{constructor(e){this.motion=e,this.group=new J,this.messageAnchor=new js,this.isOpen=!1,this.wrap=new J,this.capsule=new J,this.lidPivot=new J,this.rings=[],this.state={hover:0,open:0};let t=new Vd({color:$.ivory,roughness:.5}),n=new Z(new wd([[0,0],[.55,0],[.55,.1],[.42,.16],[.26,.24],[.2,.5],[.22,.78],[.36,.86],[.42,.92],[0,.92]].map(([e,t])=>new G(e,t)),48),t);n.castShadow=n.receiveShadow=!0;let r=new Z(new kd(.24,.03,10,40),new Vd({color:$.sage,roughness:.6}));r.rotation.x=Math.PI/2,r.position.y=.6;let i=new Z(new tu(.34,40),new dl({color:new Y($.sky).multiplyScalar(1.4),transparent:!0,opacity:.6,toneMapped:!1}));i.rotation.x=-Math.PI/2,i.position.y=.925;let a=new Z(new Od(H_,48,24,0,Math.PI*2,Math.PI/2,Math.PI/2),new Hd({color:$.yellow,roughness:.3,clearcoat:.8,clearcoatRoughness:.2,side:2}));a.castShadow=!0,this.innerMat=new dl({color:new Y(`#FFF2C9`),toneMapped:!1});let o=new Z(new tu(H_*.97,48),this.innerMat);o.rotation.x=-Math.PI/2,o.position.y=-.005;let s=new Z(new Od(H_,48,24,0,Math.PI*2,0,Math.PI/2),new Hd({color:$.sky,roughness:.3,clearcoat:.8,clearcoatRoughness:.2,side:2}));s.castShadow=!0;let c=this.sunEmblem();c.position.y=.41;let l=new J;l.add(s,c),l.position.z=H_,this.lidPivot.position.z=-.42,this.lidPivot.add(l);let u=new Z(new kd(.432,.03,12,64),new Vd({color:$.ivory,roughness:.35}));u.rotation.x=Math.PI/2,this.bandLights=new dl({color:new Y($.sky).multiplyScalar(2),toneMapped:!1});let d=new J;for(let e=0;e<10;e++){let t=e/10*Math.PI*2,n=new Z(new Od(.016,10,8),this.bandLights);n.position.set(Math.cos(t)*.45999999999999996,0,Math.sin(t)*.45999999999999996),d.add(n)}this.core=new Z(new Od(.18,24,16),new dl({color:new Y(`#FFE3A0`).multiplyScalar(2.5),transparent:!0,opacity:0,toneMapped:!1})),this.core.position.y=.03,this.halo=new Z(new Td(2.6,2.6),new dl({map:n_(),color:new Y(`#FFE4A8`),transparent:!0,opacity:.15,blending:2,depthWrite:!1})),this.capsule.add(a,o,this.lidPivot,u,d,this.core),this.wrap.add(this.capsule),this.wrap.position.y=U_;let f=new Vd({color:$.gold,roughness:.3,metalness:.6,emissive:`#FFD27A`,emissiveIntensity:.25});for(let e=0;e<2;e++){let t=new Z(new kd(.66+e*.1,.012,8,80),f);t.position.y=U_,this.rings.push(t);let n=new Z(new Od(.035,12,10),new dl({color:new Y($.pink).multiplyScalar(1.8),toneMapped:!1}));n.position.x=.66+e*.1,t.add(n)}this.proxy=new Z(new Od(.85,12,8),new dl({visible:!1})),this.proxy.position.y=1.45,this.messageAnchor.position.y=2.5,this.group.add(n,r,i,this.wrap,...this.rings,this.halo,this.proxy,this.messageAnchor)}sunEmblem(){let e=new J,t=new Vd({color:`#F7D77E`,emissive:`#FFD27A`,emissiveIntensity:.6,roughness:.4});e.add(new Z(new nu(.075,.075,.03,28),t));for(let n=0;n<8;n++){let r=n/8*Math.PI*2,i=new Z(new Od(.022,10,8),t);i.scale.set(1,.6,1),i.position.set(Math.cos(r)*.115,0,Math.sin(r)*.115),e.add(i)}return e}setHover(e){H.to(this.state,{hover:+!!e,duration:.4,ease:`sine.out`,overwrite:`auto`})}open(){this.isOpen=!0;let e=this.motion.reduced?.45:.8;return new Promise(t=>{H.timeline({onComplete:()=>t()}).to(this.capsule.scale,{x:1.08,y:.92,z:1.08,duration:.14,ease:`sine.out`}).to(this.capsule.scale,{x:1,y:1,z:1,duration:.5,ease:`elastic.out(1, 0.45)`}).to(this.lidPivot.rotation,{x:-1.75,duration:e,ease:`back.out(1.7)`},.1).to(this.state,{open:1,duration:.6,ease:`sine.out`},.15)})}close(){return this.isOpen=!1,new Promise(e=>{H.timeline({onComplete:()=>e()}).to(this.lidPivot.rotation,{x:0,duration:.4,ease:`power2.in`}).to(this.state,{open:0,duration:.35,ease:`sine.in`},0)})}coreWorld(e=new K){return this.core.getWorldPosition(e)}update(e,t){let n=this.motion.amount,{hover:r,open:i}=this.state;this.wrap.position.y=U_+Math.sin(e*1.3)*.06*n,this.wrap.rotation.z=Math.sin(e*.8)*.04*n,this.wrap.scale.setScalar(1+r*.07),this.rings[0].rotation.set(1.2+Math.sin(e*.4)*.2,e*.6*n,.3),this.rings[1].rotation.set(-1,-e*.45*n,-.4+Math.cos(e*.3)*.2),this.rings.forEach(e=>e.position.y=this.wrap.position.y),this.bandLights.color.setRGB(.66,.84,.92).multiplyScalar(1.4+r*1.2+Math.sin(e*4)*.4+i),this.innerMat.color.setRGB(1,.95,.79).multiplyScalar(.6+i*2.2),this.core.material.opacity=i,this.core.scale.setScalar(.6+i*.4+Math.sin(e*5)*.04*i),this.halo.position.set(0,this.wrap.position.y,0),this.halo.lookAt(t),this.halo.material.opacity=.14+r*.3+i*.55}},G_=(e,t,n)=>new K(e,t,n),K_={center:G_(0,0,0),radius:7.5,depth:6.5,seed:3},q_={center:G_(46,-3,-40),radius:11.5,depth:9,seed:11},J_=[{center:G_(-15,3.5,-13),radius:2.4,depth:2.8,seed:21},{center:G_(19,6,-20),radius:1.6,depth:2,seed:33},{center:G_(27,-8,-4),radius:2,depth:2.4,seed:45},{center:G_(66,2,-60),radius:2.6,depth:3,seed:57},{center:G_(63,-7,-22),radius:1.8,depth:2.2,seed:68},{center:G_(-9,-5,15),radius:1.5,depth:1.8,seed:79},{center:G_(30,5,-52),radius:1.7,depth:2,seed:88}],Y_={robotWelcome:G_(1.7,0,4.2),door:G_(-.8,0,-2.4),robotDoor:G_(1.45,0,-1.7),pocket:G_(46,-3,-33.2),robotPocket:G_(44.4,-3,-34.2),gardenCenter:G_(46,-3,-41.6),robotGarden:G_(45.5,-3,-38.4),robotLetter:G_(44.2,-3,-40.4),robotFinale:G_(47.8,-3,-35.8)},X_={halfWidth:.95,length:4},Z_={welcomeStart:Tg([19,11,33],[0,1,0]),welcomeEnd:Tg([4.4,2.3,10.8],[1,1.2,2.6]),door:Tg([-.45,1.75,4.8],[-.8,1.45,-2.4]),doorThrough:Tg([-.8,1.35,-3.7],[-.8,1.3,-9]),pocketArrive:Tg([46,-1.2,-23.5],[46,-1.6,-33.2]),pocket:Tg([46.9,-1,-28.3],[46,-1.75,-33.2]),garden:Tg([50.8,.9,-33.6],[45.8,-2.3,-41.6],{pos:[50.6,1.8,-32],target:[44.9,-2.3,-39.9]}),letter:Tg([43.6,-1.9,-35.6],[46.5,-.4,-44]),finaleStart:Tg([48.3,-1.55,-32],[47.8,-2,-35.8]),finaleEnd:Tg([78,13,30],[25,-2,-20],{pos:[-21,18,23],target:[23,1,-19]})},Q_=12,$_=[$.rose,$.yellow,$.bluebell,$.lilac,$.peach,`#F7A8A0`,$.pink,`#B8E0C2`,`#F6C76A`,`#C8B5F0`,`#8EC9EE`,`#F4A9C8`],ev=new Y(`#ECE8DE`);function tv(){let e=r(777),t=[],n=Y_.gardenCenter;for(let r=0;t.length<Q_&&r<2e3;r++){let r=e()*Math.PI*2,i=Math.sqrt(e())*4.3+.4,a=new K(n.x+Math.cos(r)*i,0,n.z+Math.sin(r)*i*.85);t.every(e=>e.distanceTo(a)>1.35)&&t.push(a)}return t}function nv(e,t,n,r,i,a=1.15){let o=e.map(e=>e.clone());for(let e=0;e<o.length;e++)for(let s of n){let n=s.x-t.x,c=s.z-t.z,l=Math.hypot(n,c)||1,u=n/l,d=c/l,f=o[e].x-t.x,p=o[e].z-t.z,m=f*u+p*d;if(m<-.3||m>i)continue;let h=-f*d+p*u;if(Math.abs(h)>=r)continue;let g=h>=0?1:-1,_=r+.15,v=()=>new K(t.x+u*m-d*_*g,o[e].y,t.z+d*m+u*_*g),y=v();for(;o.some((t,n)=>n!==e&&t.distanceTo(y)<a)&&_<r+3;)_+=.2,y=v();o[e]=y}return o}var rv=new Od(.16,16,8).scale(.58,.15,1).translate(0,0,.15),iv=new Od(.11,12,8).scale(.58,.15,1).translate(0,0,.11),av=new Od(.1,10,6).scale(.45,.08,1).translate(0,0,.1),ov=new Od(.07,18,12),sv=new Od(.5,10,8),cv=new Vd({color:$.deepSage,roughness:.7}),lv=class{constructor(e,t,r,i=$_){this.index=t,this.group=new J,this.head=new J,this.bloomed=!1,this.outer=[],this.inner=[],this.state={hover:0,open:0,flash:0},this.tone=i[t%i.length],this.target=new Y(this.tone),this.phase=r()*10;let a=n(r,.5,.72),o=n(r,-.12,.12),s=new hu([new K(0,0,0),new K(o*.3,a*.5,o*.2),new K(o,a,0)]),c=new Z(new Ad(s,14,.02,6),cv);c.castShadow=!0;let l=new Vd({color:`#9DB48F`,roughness:.65});for(let[e,t]of[[.3,0],[.5,Math.PI]]){let n=new Z(av,l);n.position.copy(s.getPoint(e)),n.rotation.set(-.5,t+r(),0),n.castShadow=!0,this.group.add(n)}this.petalMat=new Vd({color:this.target.clone().lerp(ev,.65),roughness:.55,emissive:this.target,emissiveIntensity:0}),this.innerMat=new Vd({color:this.target.clone().lerp(ev,.4),roughness:.55,emissive:this.target,emissiveIntensity:0}),this.coreMat=new Vd({color:`#F6D57A`,emissive:`#FFD27A`,emissiveIntensity:.15,roughness:.4});for(let e=0;e<7;e++){let t=new J;t.rotation.y=e/7*Math.PI*2;let n=new Z(rv,this.petalMat);n.castShadow=!0,t.add(n),this.outer.push(t),this.head.add(t)}for(let e=0;e<5;e++){let t=new J;t.rotation.y=e/5*Math.PI*2+.4,t.add(new Z(iv,this.innerMat)),t.position.y=.015,this.inner.push(t),this.head.add(t)}this.head.add(new Z(ov,this.coreMat)),this.glow=new il(new Wc({map:n_(),color:this.target,transparent:!0,opacity:0,blending:2,depthWrite:!1})),this.glow.scale.setScalar(1.1),this.head.add(this.glow),this.head.position.set(o,a,0),this.head.rotation.x=.35,this.proxy=new Z(sv,new dl({visible:!1})),this.proxy.position.copy(this.head.position),this.group.add(c,this.head,this.proxy),this.group.position.copy(e),this.group.scale.setScalar(1.6),this.group.rotation.y=n(r,-.5,.5),this.applyOpen()}setHover(e){H.to(this.state,{hover:+!!e,duration:.35,ease:`sine.out`,overwrite:`auto`})}bloom(){this.bloomed||(this.bloomed=!0,H.timeline().to(this.state,{open:1,duration:1.6,ease:`elastic.out(1, 0.55)`,onUpdate:()=>this.applyOpen()}).to(this.state,{flash:1,duration:.25,ease:`sine.out`},0).to(this.state,{flash:0,duration:1.4,ease:`sine.inOut`},.35))}setBloomed(){this.bloomed=!0,this.state.open=1,this.applyOpen()}applyOpen(){let e=this.state.open;this.outer.forEach(t=>t.children[0].rotation.x=-1.3+e*1.05),this.inner.forEach(t=>t.children[0].rotation.x=-1.45+e*.75);let t=Math.min(1,Math.max(0,e));this.petalMat.color.copy(this.target).lerp(ev,.65*(1-t)),this.innerMat.color.copy(this.target).lerp(ev,.4*(1-t)).lerp(new Y(`#FFFFFF`),.25*t),this.petalMat.emissiveIntensity=.1*t,this.innerMat.emissiveIntensity=.16*t,this.coreMat.emissiveIntensity=.15+1.6*t,this.head.scale.setScalar(.85+.15*t)}update(e,t){let{hover:n,flash:r,open:i}=this.state;this.group.rotation.z=Math.sin(e*1.1+this.phase)*.05*t,this.head.rotation.z=Math.sin(e*.8+this.phase)*.08*t;let a=(.85+.15*Math.min(1,i))*(1+n*.12);this.head.scale.setScalar(a),this.glow.material.opacity=n*.35+r*.9+(this.bloomed?.22+.06*Math.sin(e*2+this.phase):0)}},uv=class{constructor(e,t,n){this.group=new J;let i=r(4242);this.flowers=t.map((t,r)=>{let a=t.clone();return a.y=e.heightAt(a.x,a.z)-.02,new lv(a,r,i,n)}),this.group.add(...this.flowers.map(e=>e.group))}get bloomedCount(){return this.flowers.filter(e=>e.bloomed).length}nextUnbloomed(){return this.flowers.filter(e=>!e.bloomed).sort((e,t)=>e.group.position.distanceTo(Y_.gardenCenter)-t.group.position.distanceTo(Y_.gardenCenter))[0]}update(e,t){this.flowers.forEach(n=>n.update(e,t))}},dv=class{constructor(e,t,n,r){this.camera=t,this.avoid=r,this.anchor=null,this.offsetY=0,this.timer=0,this.shown=!1,this.v=new K,this.textEl=i(`span`,{class:`label-text`}),this.inner=i(`div`,{class:`label-inner`},[n===`wish`?i(`span`,{class:`label-spark`,text:`✦`,attrs:{"aria-hidden":`true`}}):null,this.textEl]),this.el=i(`div`,{class:`world-label is-${n}`,attrs:{role:`status`,"aria-live":`polite`}},[this.inner]),e.append(this.el)}show(e,t,n={}){clearTimeout(this.timer),this.anchor=t,this.offsetY=n.offsetY??0,this.textEl.textContent=e,this.shown=!0,this.el.classList.add(`is-visible`),this.inner.classList.remove(`pop`),this.inner.offsetWidth,this.inner.classList.add(`pop`),this.update(),n.duration&&(this.timer=window.setTimeout(()=>this.hide(),n.duration))}hide(){clearTimeout(this.timer),this.shown=!1,this.el.classList.remove(`is-visible`)}update(){if(!this.shown||!this.anchor)return;this.anchor instanceof K?this.v.copy(this.anchor):this.anchor.getWorldPosition(this.v),this.v.y+=this.offsetY,this.v.project(this.camera);let e=this.v.z>1;if(this.el.style.visibility=e?`hidden`:``,e)return;let t=window.innerWidth,n=window.innerHeight,r=this.el.offsetWidth/2,i=Math.min(t-12-r,Math.max(12+r,(this.v.x+1)/2*t)),a=Math.min(n-12,Math.max(12+this.el.offsetHeight,(1-this.v.y)/2*n));a=this.dodge(i,a,r,12,n),this.el.style.transform=`translate3d(${i.toFixed(1)}px, ${a.toFixed(1)}px, 0) translate(-50%, -100%)`}dodge(e,t,n,r,i){if(!this.avoid?.classList.contains(`is-visible`))return t;let a=this.avoid.getBoundingClientRect(),o=this.avoid.offsetTop,s=o+this.avoid.offsetHeight,c=this.el.offsetHeight;if(!(e+n>a.left&&e-n<a.right&&t>o&&t-c<s))return t;let l=s+8+c;return l<=i-r?l:Math.max(r+c,o-8)}},fv=!1,pv=!1;function mv(){if(fv)return;fv=!0;let e=V_.prototype.open;V_.prototype.open=function(){let t=e.call(this);return m_.award(`door`),t};let t=W_.prototype.open;W_.prototype.open=function(){let e=t.call(this);return m_.award(`pocket`),e};let n=new WeakSet,r=lv.prototype.update;lv.prototype.update=function(...e){n.add(this.head),r.apply(this,e)};let i=dv.prototype.show;dv.prototype.show=function(...e){i.apply(this,e),n.has(e[1])&&m_.award(`sunshine`)};let a=lv.prototype.bloom;lv.prototype.bloom=function(){a.call(this),pv=!0,setTimeout(()=>pv=!1,0)};let o=s_.prototype.react;s_.prototype.react=function(){o.call(this),pv||m_.award(`sunny`)}}function hv(e){pv=!0;try{e.react()}finally{pv=!1}}var gv=new Set,_v=-1;function vv(){return[...document.querySelectorAll(`.progress-dots .dot`)].findIndex(e=>e.classList.contains(`is-current`))}function yv(){return _v}function bv(e){return gv.add(e),()=>gv.delete(e)}var xv=!1;function Sv(){if(xv)return;xv=!0;let e=()=>{let e=vv();if(e!==-1&&e!==_v){let t=_v;_v=e,gv.forEach(n=>n(e,t))}};new MutationObserver(e).observe(document.body,{subtree:!0,attributes:!0,attributeFilter:[`class`],childList:!0}),e()}var Cv=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches||new URLSearchParams(location.search).get(`motion`)===`reduced`,wv={sunflower:`🌻`,gerbera:`🌸`,tulip:`🌷`,chamomile:`🌼`,carnation:`🌺`},Tv=null,Ev=0,Dv=null;function Ov(e){let t=document.querySelector(`.panel.is-visible[data-placement="top"]`),n=window.innerHeight<500?52:64;e.style.top=`${t?Math.max(n,t.getBoundingClientRect().bottom+8):n}px`}function kv(e,t){Tv??(Tv=Object.assign(document.createElement(`div`),{className:`mission-toast`,role:`status`})),Tv.setAttribute(`aria-live`,`polite`),Tv.isConnected||document.body.append(Tv),Tv.innerHTML=e,Ov(Tv),Tv.classList.remove(`is-visible`),Tv.offsetWidth,Tv.classList.toggle(`no-motion`,Cv()),Tv.classList.add(`is-visible`),clearTimeout(Ev),Ev=window.setTimeout(()=>Tv?.classList.remove(`is-visible`),t)}function Av(e){kv(`<span class="mission-toast-text">${e}</span>`,1800)}function jv(e,t){kv(`<span class="mission-toast-text"><b>${e}</b></span><span class="mission-toast-milestone">${t}</span>`,5e3)}function Mv(e){let t=e.milestone?`<span class="mission-toast-milestone">${e.milestone}</span>`:``;kv(`<span class="mission-toast-plus">+10%</span><span class="mission-toast-text"><b>${e.activity.label}</b> · ${e.activity.message}</span>${t}`,e.milestone?3400:2600)}function Nv(){Dv??(Dv=Object.assign(document.createElement(`div`),{className:`flower-tray`})),Dv.isConnected||document.body.append(Dv);let e=l_.filter(e=>m_.has(e)).length,t=l_.map(e=>`<span class="flower-slot ${m_.has(e)?`is-on`:``}" data-flower="${e}"></span>`).join(``);Dv.innerHTML=`<span aria-hidden="true">💐</span>${t}<span class="flower-count">${e}/5</span>`,Dv.setAttribute(`aria-label`,`Bouquet: ${e} of 5 flowers collected`),Dv.classList.toggle(`is-visible`,yv()===3)}function Pv(){m_.onAward(e=>{Mv(e),Nv()}),m_.onReset(Nv),bv(Nv),Nv()}function Fv(e){Tv?.classList.remove(`is-visible`);let t=document.createElement(`div`);t.className=`mission-congrats`,t.setAttribute(`role`,`status`),t.innerHTML=`<p class="congrats-main">CONGRATULATIONS, DR YEAP!</p><p class="congrats-second">YOU HAVE SUCCESSFULLY RECOVERED!</p><p class="congrats-support">You're back to full power! ☀️</p><p class="congrats-bouquet">${l_.filter(e=>m_.has(e)).map(e=>`<span class="congrats-flower" aria-hidden="true">${wv[e]}</span>`).join(``)}</p><p class="congrats-bouquet-line">A bouquet of sunshine, just for you! 💐</p>`,t.classList.toggle(`no-motion`,Cv());let n=!1,r=(r=!0)=>{n||(n=!0,a(),clearTimeout(o),r&&e?.(),t.classList.remove(`is-visible`),setTimeout(()=>t.remove(),500))},i=performance.now();t.addEventListener(`click`,()=>{performance.now()-i>700&&r()});let a=bv(()=>r(!1));document.body.append(t),requestAnimationFrame(()=>t.classList.add(`is-visible`));let o=setTimeout(()=>r(),6e3)}var Iv=(e,t={})=>new Vd({color:e,roughness:.6,emissive:t.emissive??`#000000`,emissiveIntensity:t.emissive?.25:0,flatShading:t.flat??!1,transparent:t.opacity!==void 0,opacity:t.opacity??1});function Lv(e,t,n,r=.25){let i=new J;for(let a=0;a<e;a++){let o=new J;o.rotation.y=a/e*Math.PI*2;let s=n();s.position.z=t,s.rotation.x=-r,o.add(s),i.add(o)}return i}var Rv=(e,t,n)=>{let r=new Z(new Od(1,10,6),Iv(n));return r.scale.set(e,.012,t),r};function zv(e){let t=new J;switch(e){case`sunflower`:t.add(Lv(16,.13,()=>Rv(.035,.07,`#F7C948`))),t.add(new Z(new Od(.085,16,10).scale(1,.45,1),Iv(`#7A4E2A`)));break;case`gerbera`:t.add(Lv(22,.11,()=>Rv(.018,.075,`#F48FB1`))),t.add(new Z(new Od(.05,14,10).scale(1,.5,1),Iv(`#E8963F`)));break;case`tulip`:{let e=new Z(new wd([new G(0,-.02),new G(.06,0),new G(.09,.06),new G(.085,.14),new G(.06,.18)],14),Iv(`#F6B3C3`));e.material.side=2,t.add(e,new Z(new Od(.03,10,8),Iv(`#F7D774`)).translateY(.05)),t.rotation.x=.5;break}case`chamomile`:t.add(Lv(13,.09,()=>Rv(.022,.055,`#FFFFFF`),.4)),t.add(new Z(new Od(.045,14,10).scale(1,.75,1),Iv(`#F5C842`)));break;case`carnation`:for(let e=0;e<4;e++){let n=new Z(new Cd(.1-e*.012,1),Iv(e%2?`#F7B6C8`:`#F29AB2`,{flat:!0}));n.position.set(Math.cos(e*2.1)*.03,e*.02,Math.sin(e*2.1)*.03),n.rotation.set(e,e*2,e*.5),t.add(n)}}return t}function Bv(e){let t=new J,n=new Z(new nu(.012,.016,.56,6).translate(0,.28,0),Iv(`#7FA06E`)),r=(e,t)=>{let n=new Z(new Od(1,8,5),Iv(`#9DB48F`));return n.scale.set(.035,.008,.09),n.position.set(Math.sin(e)*.06,t,Math.cos(e)*.06),n.rotation.y=e,n},i=zv(e);i.position.y=.58,i.rotation.x+=-.45;let a=new Z(new kd(.17,.012,8,32),new dl({color:`#FFE7A0`,transparent:!0,opacity:0}));a.rotation.x=Math.PI/2,a.position.y=.58;let o=new Z(new Od(.32,10,8),new dl({visible:!1}));return o.position.y=.5,t.add(n,r(.4,.18),r(Math.PI+.3,.3),i,a,o),t.scale.setScalar(1.5),t.traverse(e=>{e instanceof Z&&e!==o&&e!==a&&(e.castShadow=!0)}),t.userData={id:e,proxy:o,glow:a,head:i},t}var Vv={sunflower:[47,-39.5],gerbera:[47,-38.5],tulip:[43,-42],chamomile:[41,-41.5],carnation:[45,-37.5]},Hv=3,Uv=2,Wv=new Map,Gv=!1,Kv=null;function qv(e){for(let[t,n]of Wv)n.obj.visible=e===Hv||Gv&&m_.has(t);Kv&&(Kv.visible=e===Uv)}var Jv=matchMedia(`(prefers-reduced-motion: reduce)`).matches||new URLSearchParams(location.search).get(`motion`)===`reduced`,Yv=`已经收进花束啦 ✓`;function Xv(){return[`sunflower`,`gerbera`,`tulip`,`chamomile`,`carnation`].map(e=>({create:t=>{let n=Bv(e),[r,i]=Vv[e];return n.position.copy(t.ground(r,i)).add(new K(0,-.02,0)),n.rotation.y=(r*7+i*3)%(Math.PI*2),n.visible=!1,Wv.set(e,{obj:n,home:{parent:null,pos:n.position.clone(),rot:n.rotation.y,scale:n.scale.x}}),n},interact:{proxy:e=>e.userData.proxy,onTap:(e,t)=>Zv(e,t),onHover:(e,t)=>{Gv||H.to(t.userData.head.scale,{x:e?1.15:1,y:e?1.15:1,z:e?1.15:1,duration:.25})}},update:(e,t,n)=>{if(Gv)return;if(!m_.has(n.userData.id)){let t=n.userData.glow.material;t.opacity=Jv?.35:.22+.2*Math.sin(e*2.4+n.position.x*3)}let r=n.userData.head;r.rotation.z=Math.sin(e*1.2+n.position.x)*.06;let i=n.userData.lift;i!==void 0&&m_.has(n.userData.id)&&(n.position.y=i+Math.sin(e*1.6+n.position.x)*.05)}}))}function Zv(e,t){let n=t.userData.id;if(Gv)return;if(m_.has(n)){H.fromTo(t.rotation,{z:0},{z:.12,duration:.12,yoyo:!0,repeat:3}),Av(Yv);return}if(!m_.award(n))return;t.userData.proxy.scale.setScalar(.55);let r=Wv.get(n).home.pos.y+.35;e.motion.reduced?(t.position.y=r,t.userData.lift=r):H.to(t.position,{y:r,duration:.8,ease:`back.out(1.6)`,onComplete:()=>void(t.userData.lift=r)}),H.to(t.userData.glow.material,{opacity:.85,duration:.5}),e.burst(new K().setFromMatrixPosition(t.matrixWorld).add(new K(0,1,0)),[`#FFE8A8`,`#F7C948`,`#F48FB1`,`#FFFFFF`],45)}function Qv(e,t){if(Gv)return;Gv=!0;let n=0;for(let[r,i]of Wv){if(!m_.has(r))continue;let a=i.obj;a.userData.proxy.scale.setScalar(.001),i.home.parent=a.parent,a.visible=!0,e.attach(a);let o=(n-2)*.32,s={x:Math.sin(o)*.12,y:.42,z:.5+Math.cos(o)*.04},c={x:0,y:0,z:-o*.6},l=.7/e.scale.x;t?(a.position.set(s.x,s.y,s.z),a.rotation.set(c.x,c.y,c.z),a.scale.setScalar(l)):(H.to(a.position,{...s,duration:1.1,delay:n*.12,ease:`power2.inOut`}),H.to(a.rotation,{...c,duration:1.1,delay:n*.12}),H.to(a.scale,{x:l,y:l,z:l,duration:1.1,delay:n*.12})),n++}}function $v(e){Gv=!1;for(let e of Wv.values()){let t=e.obj;H.killTweensOf([t.position,t.rotation,t.scale]),e.home.parent&&t.parent!==e.home.parent&&e.home.parent.attach(t),t.position.copy(e.home.pos),t.rotation.set(0,e.home.rot,0),t.scale.setScalar(e.home.scale),t.userData.lift=void 0,t.userData.proxy.scale.setScalar(1),t.userData.glow.material.opacity=0,H.killTweensOf([t.userData.head.scale,t.userData.glow.material]),t.userData.head.scale.setScalar(1)}qv(e)}function ey(){return{create:e=>{let t=new J,n=new Z(new nu(.11,.09,.2,24,1,!0).translate(0,.1,0),Iv(`#FAF8F1`));n.material.side=2;let r=new Z(new nu(.09,.09,.01,24).translate(0,.005,0),Iv(`#FAF8F1`)),i=new Z(new nu(.1,.1,.01,24).translate(0,.17,0),Iv(`#CDEBF7`,{emissive:`#CDEBF7`})),a=new Z(new kd(.105,.012,8,32),Iv(`#A9D6EB`));a.rotation.x=Math.PI/2,a.position.y=.12;let o=new Z(new kd(.05,.014,8,20,Math.PI),Iv(`#FAF8F1`));o.position.set(.11,.1,0),o.rotation.z=-Math.PI/2;let s=[0,1,2].map(e=>{let t=new Z(new Od(.03,10,8),Iv(`#FFFFFF`,{opacity:.55}));return t.position.set((e-1)*.03,.25+e*.06,0),t}),c=new Z(new Od(.3,10,8),new dl({visible:!1}));return c.position.y=.15,t.add(n,r,i,a,o,...s,c),t.userData={proxy:c,steam:s},t.scale.setScalar(1.6),t.position.copy(e.ground(44.9,-33.4)),t.visible=!1,Kv=t,t},interact:{proxy:e=>e.userData.proxy,onTap:(e,t)=>{m_.has(`water`)?Av(`已经喝过温水啦 ✓`):m_.award(`water`)&&(e.burst(new K().setFromMatrixPosition(t.matrixWorld).add(new K(0,.5,0)),[`#CDEBF7`,`#FFFFFF`,`#FFE8A8`],35),H.fromTo(t.scale,{y:t.scale.y*.9},{y:t.scale.y,duration:.5,ease:`elastic.out(1, 0.5)`}))},onHover:(e,t)=>H.to(t.scale,{x:e?1.75:1.6,z:e?1.75:1.6,duration:.2})},update:(e,t,n)=>{n.userData.steam.forEach((t,n)=>{let r=(e*.5+n/3)%1;t.position.y=.22+r*.25,t.material.opacity=.55*(1-r)})}}}var ty=[`#F7C948`,`#F48FB1`,`#A9D6EB`,`#FFFFFF`,`#FFE8A8`,`#B9CAA7`];function ny(e,t){if(!m_.claimCelebration())return;let n=e.motion.reduced,r=()=>t.speechAnchor.getWorldPosition(new K);w_(),e.playSound(`sparkle`),setTimeout(()=>e.playSound(`bloom`),350),hv(t),t.setHappy(!0),t.wave(3),e.burst(r(),ty,n?50:140),n||(setTimeout(()=>e.burst(r().add(new K(.8,.2,0)),ty,90),300),setTimeout(()=>e.burst(r().add(new K(-.8,.3,0)),[`#FFE8A8`,`#F7C948`,`#FFFFFF`],90),600)),Fv(()=>e.say(`A bouquet of sunshine, just for you! 💐`,t.speechAnchor,4500)),setTimeout(()=>Qv(t.root,n),n?300:1400),setTimeout(()=>t.setHappy(!1),3500)}var ry={door:`🚪 魔法门`,pocket:`🎁 惊喜口袋`,water:`🍵 温水`,sunny:`💙 点一下 Sunny`,sunshine:`☀️ 愿望花`,sunflower:`🌻 向日葵`,gerbera:`🌸 非洲菊`,tulip:`🌷 郁金香`,chamomile:`🌼 洋甘菊`,carnation:`🌺 康乃馨`},iy=[{scene:2,label:`${t.pocket.next} →`,ids:[`water`]},{scene:3,label:`${t.garden.next} →`,ids:[`sunshine`,`sunflower`,`gerbera`,`tulip`,`chamomile`,`carnation`,`sunny`]}],ay=!1,oy=-1;function sy(){ay||(ay=!0,bv(()=>oy=-1),document.addEventListener(`click`,e=>{let t=e.target?.closest?.(`.panel button`);if(!t)return;let n=yv(),r=iy.find(e=>e.scene===n&&t.textContent?.trim()===e.label);if(!r||oy===n)return;let i=r.ids.filter(e=>!m_.has(e));i.length!==0&&(oy=n,e.preventDefault(),e.stopImmediatePropagation(),jv(`还差 ${i.length} 项（每项 +10%）：${i.map(e=>ry[e]).join(`、`)}`,`再按一次「${r.label.replace(` →`,``)}」就继续（没做完的，最后还能补上）`))},!0))}var cy=5,ly=[[`door`,`🚪`,`魔法门`],[`pocket`,`🎁`,`惊喜口袋`],[`water`,`🍵`,`喝一杯温水`],[`sunshine`,`☀️`,`收集阳光`],[`sunny`,`💙`,`Sunny 的加油`],[`sunflower`,`🌻`,`向日葵`],[`gerbera`,`🌸`,`非洲菊`],[`tulip`,`🌷`,`郁金香`],[`chamomile`,`🌼`,`洋甘菊`],[`carnation`,`🌺`,`康乃馨`]],uy=()=>matchMedia(`(prefers-reduced-motion: reduce)`).matches||new URLSearchParams(location.search).get(`motion`)===`reduced`,dy=!1;function fy(e,t){if(dy)return;dy=!0;let n=null,r=0,i=()=>{clearTimeout(r);let e=n;n=null,e&&(e.classList.remove(`is-visible`),setTimeout(()=>e.remove(),450))},a=()=>{if(!n)return;let e=ly.filter(([e])=>!m_.has(e));if(e.length===0)return i();n.querySelector(`.makeup-count`).textContent=`还差 ${e.length} 项，每项 +10%`,n.querySelector(`.makeup-items`).innerHTML=e.map(([e,t,n])=>`<button type="button" class="makeup-item" data-activity="${e}"><span class="makeup-icon" aria-hidden="true">${t}</span><span class="makeup-label">${n}</span></button>`).join(``)},o=()=>{n||m_.completed||yv()!==cy||(n=document.createElement(`section`),n.className=`makeup-card`,n.setAttribute(`aria-label`,`补上没做完的小任务`),n.innerHTML=`<p class="makeup-title">还差一点点就满血啦！</p><p class="makeup-count"></p><div class="makeup-items"></div>`,n.classList.toggle(`no-motion`,uy()),n.addEventListener(`click`,n=>{let r=n.target.closest(`.makeup-item`);if(!r)return;let i=r.dataset.activity;m_.has(i)||(i===`sunny`?t.react():m_.award(i)&&(e.playSound(i===`water`?`pop`:`sparkle`),e.burst(t.speechAnchor.getWorldPosition(new K),[`#FFE8A8`,`#F7C948`,`#F48FB1`,`#FFFFFF`,`#CDEBF7`],40)))}),document.body.append(n),a(),requestAnimationFrame(()=>n?.classList.add(`is-visible`)))};bv(e=>{i(),e===cy&&!m_.completed&&(r=window.setTimeout(o,uy()?1200:3200))}),m_.onAward(a),m_.onReset(i)}Z_.pocket.portrait={pos:new K(45.7,-.2,-24.6),target:new K(45.2,-1.95,-33.6)},Z_.door.portrait={pos:new K(.9,2.1,8.2),target:new K(.3,1.3,-2)},Y_.robotLetter.set(43.25,-3,-41.75),Z_.letter.portrait={pos:new K(42.59,-2.42,-32.66),target:new K(44.25,1.06,-41.75)};var py=4,my=!1;function hy(e,t,n,r){e.classList.toggle(`letter-unfolded`,t.style.clipPath.startsWith(`inset(0%`));let i=t.style.display!==`none`&&t.style.display!==``;i&&r.parentElement!==n?(n.prepend(r),e.classList.add(`has-letter`)):!i&&r.parentElement!==e&&(e.prepend(r),e.classList.remove(`has-letter`))}function gy(){bv(e=>{if(e!==py||my)return;let t=document.querySelector(`.letter-layer`),n=document.querySelector(`.letter-card`),r=document.querySelector(`.letter-paper`),i=document.querySelector(`.letter-heading`);t&&n&&r&&i&&(my=!0,new MutationObserver(()=>hy(t,n,r,i)).observe(n,{attributes:!0,attributeFilter:[`style`]}),hy(t,n,r,i))})}function _y(){let e=typeof matchMedia==`function`&&matchMedia(`(hover: none) and (pointer: coarse)`).matches,t=/Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);return e||t}function vy(e,t){let n=e.createBiquadFilter();n.type=`highpass`,n.frequency.value=180,n.Q.value=.6;let r=e.createBiquadFilter();r.type=`peaking`,r.frequency.value=1e3,r.Q.value=.8,r.gain.value=5;let i=e.createBiquadFilter();i.type=`peaking`,i.frequency.value=2200,i.Q.value=1,i.gain.value=3;let a=e.createGain();a.gain.value=10**(3/20);let o=e.createDynamicsCompressor();o.threshold.value=-4,o.knee.value=3,o.ratio.value=12,o.attack.value=.002,o.release.value=.22;let s=e.createGain();return s.gain.value=10**(-1/20),n.connect(r).connect(i).connect(a).connect(o).connect(s).connect(t),n}var yy=`sunshine-yeap:music`,by=[`pointerdown`,`pointerup`,`mousedown`,`touchend`,`click`,`keydown`],xy=null,Sy=null,Cy=!1,wy=!1,Ty=!1,Ey=!1,Dy=_y();function Oy(e){let t=AudioNode.prototype.connect,n=null,r=!1;AudioNode.prototype.connect=function(e,...i){if(e instanceof AudioDestinationNode&&!r){if(!n){r=!0;try{n=vy(e.context,e)}finally{r=!1}}return t.call(this,n,...i),e}return t.call(this,e,...i)};try{return e()}finally{AudioNode.prototype.connect=t}}var ky=wg.prototype,Ay=ky.ensure;ky.ensure=function(){let e=Dy?Oy(()=>Ay.call(this)):Ay.call(this);return e!==xy&&(xy=e,e.addEventListener(`statechange`,Ly)),e};function jy(){try{return localStorage.getItem(yy)}catch{return null}}function My(e){try{localStorage.setItem(yy,e?`on`:`off`)}catch{}}var Ny=()=>Sy?.getAttribute(`aria-pressed`)===`true`,Py=()=>xy?.state===`running`,Fy=()=>Ny()&&!Py()&&!document.hidden;function Iy(e){let t=navigator.audioSession;if(t)try{t.type=e?`playback`:`auto`}catch{}}function Ly(){if(!Sy)return;Iy(Ny());let e=Fy();Sy.classList.toggle(`is-pending`,e),Sy.dataset.music=Ny()?Py()?`playing`:`pending`:`off`,e?(Sy.setAttribute(`aria-label`,`Music on, starting with your first tap`),Sy.title=`Music starts with your first tap`,Ry()):(Ny()&&Sy.setAttribute(`aria-label`,`Turn music off`),Sy.removeAttribute(`title`),zy())}function Ry(){if(!wy){wy=!0;for(let e of by)window.addEventListener(e,By,{capture:!0})}}function zy(){if(wy){wy=!1;for(let e of by)window.removeEventListener(e,By,{capture:!0})}}function By(e){if(!e.isTrusted||!xy||!Sy)return;let t=e.target instanceof Node&&Sy.contains(e.target);if(e.type===`click`?(t&&Ey&&(e.stopImmediatePropagation(),e.preventDefault()),Ey=!1):(e.type===`pointerdown`||e.type===`mousedown`||e.type===`keydown`)&&t&&Fy()&&(Ey=!0),Fy()){xy.resume().then(Ly,Ly);try{let e=xy.createBufferSource();e.buffer=xy.createBuffer(1,1,xy.sampleRate),e.connect(xy.destination),e.start(0)}catch{}}}function Vy(){Cy||(Sy=document.querySelector(`.sound-toggle`),Sy&&(Cy=!0,Sy.addEventListener(`click`,()=>{Ty||My(Ny()),Ly()}),document.addEventListener(`visibilitychange`,()=>window.setTimeout(Ly,400)),jy()!==`off`&&(Ty=!0,Sy.click(),Ty=!1),Ly()))}mv();var Hy={companion:{create:e=>{let t=new s_(e.motion);return m_.onAward(n=>{n.completed&&ny(e,t)}),fy(e,t),t}},props:[...Xv(),ey()],decorations:[()=>(document.title=t.title,T_(),Vy(),Pv(),sy(),gy(),bv((e,t)=>{e===0&&t===5&&(m_.reset(),$v(e)),qv(e)}),Sv(),new J)]};function Uy(e){return{motion:e.motion,ground:(t,n)=>new K(t,e.groundAt(t,n),n),spots:e.spots,onTick:t=>e.stage.onTick(t),burst:(t,n,r)=>e.burst(t,n??e.sparkles,r),say:(t,n,r=3e3)=>e.say(t,n,r),playSound:t=>e.play(t)}}async function Wy(e,t,n,r){for(let r of e.decorations??[])n.scene.add(await r(t));for(let i of e.props??[]){let e=await i.create(t);n.scene.add(e);let a=i.interact;if(a&&r.add(a.proxy?.(e)??e,{onClick:()=>a.onTap(t,e),onHover:a.onHover?t=>a.onHover(t,e):void 0}),i.update){let t=i.update;n.onTick((n,r)=>t(n,r,e))}}}var Gy=`
  uniform float uT;
  uniform float uLife;
  uniform float uPixelRatio;
  attribute vec3 aVel;
  attribute vec3 aColor;
  attribute float aSeed;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float t = uT;
    // Fast out, then a slow drift upwards like dandelion fluff.
    vec3 p = position + aVel * (1.0 - exp(-t * 2.4)) / 2.4 + vec3(0.0, 0.22 * t, 0.0);
    p.x += sin(t * 2.0 + aSeed * 20.0) * 0.06 * t;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    float life = clamp(t / uLife, 0.0, 1.0);
    gl_PointSize = (3.0 + aSeed * 5.0) * uPixelRatio * (1.0 - life * 0.5) * (14.0 / max(-mv.z, 0.5));
    vColor = aColor;
    vAlpha = pow(1.0 - life, 1.4) * (0.65 + 0.35 * sin(t * 12.0 + aSeed * 30.0));
  }
`,Ky=`
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(vColor * 2.0, a * a * vAlpha);
  }
`;function qy(e){return(t,n,r=90)=>{let i=[],a=[],o=[],s=[],c=new Y;for(let e=0;e<r;e++){i.push(t.x,t.y,t.z);let r=Math.random()*Math.PI*2,l=Math.random()*.9+.1,u=.8+Math.random()*1.6;a.push(Math.cos(r)*Math.sqrt(1-l*l)*u,l*u,Math.sin(r)*Math.sqrt(1-l*l)*u),c.set(n[e%n.length]),o.push(c.r,c.g,c.b),s.push(Math.random())}let l=new Nc;l.setAttribute(`position`,new X(i,3)),l.setAttribute(`aVel`,new X(a,3)),l.setAttribute(`aColor`,new X(o,3)),l.setAttribute(`aSeed`,new X(s,1));let u={uT:{value:0},uLife:{value:2.2},uPixelRatio:{value:e.currentPixelRatio}},d=new zd({uniforms:u,vertexShader:Gy,fragmentShader:Ky,transparent:!0,depthWrite:!1,blending:2}),f=new Kl(l,d);f.frustumCulled=!1,e.scene.add(f);let p=e.onTick((t,n)=>{u.uT.value+=n,u.uT.value>u.uLife.value&&(p(),e.scene.remove(f),l.dispose(),d.dispose())})}}var Jy=e=>new Promise(t=>setTimeout(t,e)),Yy=()=>new Promise(e=>requestAnimationFrame(()=>e())),Xy=class{constructor(){this.alive=!0,this.timers=new Set,this.disposers=[]}get active(){return this.alive}timeout(e,t){let n=window.setTimeout(()=>{this.timers.delete(n),this.alive&&e()},t);this.timers.add(n)}interval(e,t){let n=window.setInterval(()=>{this.alive&&e()},t);this.disposers.push(()=>clearInterval(n))}add(e){this.disposers.push(e)}dispose(){this.alive=!1,this.timers.forEach(e=>clearTimeout(e)),this.timers.clear(),this.disposers.splice(0).forEach(e=>e())}};function Zy(){let e=new Iu;e.moveTo(0,.01),e.bezierCurveTo(.05,.12,.2,.15,.22,.05),e.bezierCurveTo(.23,-.01,.16,-.03,.1,-.02),e.bezierCurveTo(.16,-.06,.15,-.15,.07,-.13),e.bezierCurveTo(.03,-.12,.01,-.06,0,-.02),e.lineTo(0,.01);let t=new Ed(e,10);return t.rotateX(-Math.PI/2),t}var Qy=class{constructor(e,t){this.group=new J,this.flock=[],this.prev=new K,this.next=new K;let r=Zy(),i=new eu(.012,.07,3,6).rotateX(Math.PI/2),o=new Vd({color:`#7D6E7A`,roughness:.6}),s=[$.pink,$.yellow,$.sky,$.lilac,$.peach].map(e=>new Vd({color:e,emissive:e,emissiveIntensity:.25,roughness:.5,side:2}));e.forEach((e,c)=>{for(let l=0;l<e.count;l++){let u=new J,d=a(t,s),f=new Z(r,d),p=new Z(r,d);p.scale.x=-1,u.add(new Z(i,o),p,f),this.group.add(u);let m=+(l<e.visible);this.flock.push({group:u,left:p,right:f,zone:c,center:e.center.clone().add(new K(n(t,-1,1),0,n(t,-1,1)).multiplyScalar(e.radius*.4)),radius:n(t,.5,1)*e.radius,height:n(t,.5,1.6),phase:t()*100,speed:n(t,.18,.32),size:n(t,.8,1.25),appear:m,target:m})}})}setVisible(e,t){let n=0;for(let r of this.flock)r.zone===e&&(r.target=+(n++<t))}path(e,t,n){let r=t*e.speed+e.phase;return n.set(e.center.x+Math.cos(r)*e.radius+Math.sin(r*2.3)*.35,e.center.y+e.height+Math.sin(r*1.7)*.35+Math.sin(r*5.1)*.06,e.center.z+Math.sin(r*1.3)*e.radius*.8)}update(e,t,n){let r=e*(.4+.6*n);for(let i of this.flock){if(i.appear+=(i.target-i.appear)*Math.min(1,t*1.5),i.group.visible=i.appear>.01,!i.group.visible)continue;this.path(i,r,this.prev),this.path(i,r+.08,this.next),i.group.position.copy(this.prev),i.group.lookAt(this.next),i.group.scale.setScalar(i.size*i.appear);let a=Math.sin(e*(9+i.speed*12)+i.phase)*.95*(.5+.5*n)+.25;i.right.rotation.z=a,i.left.rotation.z=-a}}},$y={minX:-90,maxX:140};function eb(e,t){let r=[];for(let i=0;i<t;i++){let a=n(e,.7,1.35)*(i===0?1.3:1),o=new Cd(a,3);M_(o,.05,i*3.1);let s=t===1?0:i/(t-1)-.5;o.translate(s*t*.95+n(e,-.2,.2),n(e,-.1,.45)*a,n(e,-.5,.5));let c=o.attributes.position;for(let e=0;e<c.count;e++)c.getY(e)<-.15&&c.setY(e,-.15+(c.getY(e)+.15)*.35);o.computeVertexNormals(),r.push(o)}let i=N_(r);return A_(i,`#D9E6EE`,`#FFFFFF`,-.4,1.4),i}var tb=class{constructor(e){this.group=new J,this.drifters=[],this.material=new Vd({vertexColors:!0,roughness:1,metalness:0,emissive:`#FFF4EA`,emissiveIntensity:.12});let t=[eb(e,5),eb(e,4),eb(e,6),eb(e,3)];for(let r=0;r<18;r++){let i=new Z(t[r%t.length],this.material),a=n(e,1.2,2.6);i.scale.set(a*n(e,1,1.4),a,a),i.position.set(n(e,$y.minX,$y.maxX),n(e,-6,14),n(e,-85,30)),Math.abs(i.position.y)<4&&i.position.z>-50&&i.position.x>-10&&i.position.x<60&&(i.position.y+=12);let o=Math.max(0,Math.min(1,(i.position.x*19+i.position.y*11+i.position.z*33)/1571));Math.hypot(i.position.x-19*o,i.position.y-11*o,i.position.z-33*o)<14&&(i.position.z-=40),this.add(i,n(e,.25,.6),e)}for(let r=0;r<26;r++){let i=new Z(t[r%t.length],this.material),a=n(e,4,7);i.scale.set(a*1.4,a*.8,a),i.position.set(n(e,$y.minX,$y.maxX),n(e,-26,-19),n(e,-110,40)),this.add(i,n(e,.15,.35),e)}}add(e,t,r){e.rotation.y=n(r,-.4,.4),this.group.add(e),this.drifters.push({mesh:e,speed:t,bob:r()*6.28,baseY:e.position.y})}update(e,t,n){for(let r of this.drifters){let i=r.mesh.position;i.x+=r.speed*t*n,i.x>$y.maxX&&(i.x=$y.minX),i.y=r.baseY+Math.sin(e*.2+r.bob)*.25*n}}},nb={uTime:{value:0},uWind:{value:1}};function rb(e,t){let{sway:n,bloom:r}=t;e.onBeforeCompile=e=>{n>0&&(e.uniforms.uTime=nb.uTime,e.uniforms.uWind=nb.uWind,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uTime;
uniform float uWind;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
          {
            vec4 base = vec4(0.0, 0.0, 0.0, 1.0);
            #ifdef USE_INSTANCING
              base = instanceMatrix * base;
            #endif
            base = modelMatrix * base;
            float h = max(position.y, 0.0);
            float phase = uTime * 1.6 + base.x * 0.55 + base.z * 0.4;
            float s = (sin(phase) * 0.65 + sin(phase * 2.3 + 1.3) * 0.25) * ${n.toFixed(4)} * uWind * h * h;
            transformed.x += s;
            transformed.z += s * 0.45;
          }`)),r&&(e.uniforms.uBloom=r,e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform float uBloom;`).replace(`#include <color_fragment>`,`#include <color_fragment>
          {
            float g = dot(diffuseColor.rgb, vec3(0.299, 0.587, 0.114));
            vec3 pale = mix(vec3(g), diffuseColor.rgb, 0.2) * 0.9 + 0.07;
            diffuseColor.rgb = mix(pale, diffuseColor.rgb, uBloom);
          }`))},e.customProgramCacheKey=()=>`foliage:${n}:${+!!r}`}var ib=[$.sage,`#B4C7A2`,`#9DB28F`,`#C1D0AE`],ab=[$.pink,`#F2CDCB`,`#EDB5BB`];function ob(e,t,r){let i=n(e,1.1,1.6)*t,o=new nu(.07*t,.13*t,i,8);o.translate(0,i/2,0),k_(o,$.trunk);let s=[],c=3+Math.floor(e()*2),l=r?ab:ib;for(let r=0;r<c;r++){let o=n(e,.48,.75)*t*(r===0?1.15:1),c=new Cd(o,2);M_(c,.06*o,r+t*7),j_(c,a(e,l),.72);let u=r===0?0:.42;c.translate(n(e,-u,u)*t,i+n(e,-.05,.4)*t,n(e,-u,u)*t),s.push(c)}return{trunk:o,leaves:s}}function sb(e){let t=n(e,.12,.32),r=new au(t,0);return r.scale(n(e,1,1.5),n(e,.55,.8),n(e,1,1.3)),r.rotateY(e()*Math.PI),j_(r,new Y($.stone).lerp(new Y($.rock),e()*.4),.8),r.translate(0,t*.25,0),r}function cb(e,t,r,i){let a=new J;a.position.copy(e.spec.center);let o=[],s=[];for(let n of t.trees){let t=e.radiusAt(n.angle)*n.rn,i=Math.cos(n.angle)*t,a=Math.sin(n.angle)*t,c=e.heightLocal(i,a)-.05,{trunk:l,leaves:u}=ob(r,n.scale,!!n.blossom),d=r()*Math.PI*2;for(let e of[l,...u])e.rotateY(d).translate(i,c,a);o.push(l),s.push(...u)}for(let i=0,a=0;i<t.rocks&&a<t.rocks*20;a++){let a=r()*Math.PI*2,s=n(r,.35,.92),c=e.radiusAt(a)*s,l=Math.cos(a)*c,u=Math.sin(a)*c;t.avoid?.(l,u)||(o.push(sb(r).translate(l,e.heightLocal(l,u),u)),i++)}for(let[i,a]of t.stones??[]){let t=n(r,.26,.36),s=new nu(t,t*1.06,.07,14);s.scale(1,1,n(r,.75,.95)),s.rotateY(r()*Math.PI),j_(s,$.stone,.85),o.push(s.translate(i,e.heightLocal(i,a)+.01,a))}if(o.length){let e=new Vd({vertexColors:!0,roughness:.9});i&&rb(e,{sway:0,bloom:i});let t=new Z(N_(o),e);t.castShadow=t.receiveShadow=!0,a.add(t)}if(s.length){let e=new Vd({vertexColors:!0,roughness:.8});rb(e,{sway:.0035,bloom:i});let t=new Z(N_(s),e);t.castShadow=t.receiveShadow=!0,a.add(t)}return a}var lb=.32;function ub(){let e=k_(new nu(.008,.012,lb,5).translate(0,lb/2,0),$.deepSage),t=k_(new Od(.05,6,4).scale(.45,.12,1).translate(0,0,.045),`#9DB48F`);t.rotateX(-.5).translate(0,.1,0);let n=k_(new Od(.045,6,4).scale(.45,.12,1).translate(0,0,.04),`#9DB48F`);return n.rotateX(-.6).rotateY(Math.PI).translate(0,.16,0),N_([e,t,n,k_(new Od(.03,8,6).translate(0,.33,0),`#F2C760`)])}function db(){let e=[];for(let t=0;t<6;t++){let n=new Od(.05,8,5).scale(.55,.22,1).translate(0,0,.055);n.rotateX(-.25).rotateY(t/6*Math.PI*2),e.push(k_(n,`#FFFFFF`))}return N_(e).translate(0,lb,0)}function fb(){let e=new wd([new G(0,-.01),new G(.045,0),new G(.07,.04),new G(.068,.09),new G(.05,.125)],9);return A_(e,`#E8E8E8`,`#FFFFFF`,0,.12),N_([e]).translate(0,.31,0)}function pb(){let e=[];for(let t=0;t<4;t++){let n=.22+t*.03,r=new ru(.022,n,3,1).translate(0,n/2,0);r.rotateZ((t%2?1:-1)*(.15+t*.06)).rotateY(t*1.7),r.translate(Math.cos(t*2.1)*.03,0,Math.sin(t*2.1)*.03),e.push(A_(r,$.deepSage,`#C9D8B4`,0,n))}return N_(e)}function mb(e,t,r,i){let o=new J,s=new Fo,c=new ms,l=new K,u=new K,d=new Y,f=(e,t)=>e.map(e=>{c.set(n(r,-.12,.12),r()*Math.PI*2,n(r,-.12,.12)),s.setFromEuler(c);let i=n(r,t[0],t[1]);return new is().compose(l.set(e.x,e.y-.02,e.z),s,u.set(i,i,i))}),p=(e,t)=>{t.forEach((t,n)=>e.setMatrixAt(n,t)),e.instanceMatrix.needsUpdate=!0,e.computeBoundingSphere(),e.receiveShadow=!0,o.add(e)},m=[],h=[];e.forEach(e=>(r()<.68?m:h).push(e));let g=f(m,[.8,1.35]),_=f(h,[.8,1.35]),v=new Vd({vertexColors:!0,roughness:.75});rb(v,{sway:.9,bloom:i});let y=new Vd({vertexColors:!0,roughness:.6,side:2});rb(y,{sway:.9,bloom:i}),p(new Pl(ub(),v,m.length+h.length),[...g,..._]);let b=new Pl(db(),y,m.length);m.forEach((e,t)=>b.setColorAt(t,d.set(a(r,Xg)))),p(b,g);let x=new Pl(fb(),y,h.length);h.forEach((e,t)=>x.setColorAt(t,d.set(a(r,[$.pink,$.rose,$.yellow,$.lilac,$.peach])))),p(x,_);let S=new Vd({vertexColors:!0,roughness:.85});return rb(S,{sway:1.6,bloom:i}),p(new Pl(pb(),S,t.length),f(t,[.7,1.4])),o}var hb=84,gb=10,_b=16,vb=class{constructor(e,t){this.spec=e;let n=new Vd({vertexColors:!0,roughness:.95,metalness:0});t&&rb(n,{sway:0,bloom:t}),this.mesh=new Z(this.build(),n),this.mesh.position.copy(e.center),this.mesh.receiveShadow=!0}radiusAt(e){let t=this.spec.seed;return this.spec.radius*(1+.055*Math.sin(3*e+t)+.035*Math.sin(5*e+t*1.7)+.02*Math.sin(9*e+t*.3))}radial(e,t){return Math.hypot(e,t)/this.radiusAt(Math.atan2(t,e))}heightLocal(t,n){let r=this.spec.seed,i=this.radial(t,n);return(.16*Math.sin(t*.42+r)*Math.cos(n*.37+r*1.3)+.05*Math.sin(t*1.1+n*.9+r*2.1)+.18*Math.max(0,1-i*i))*(1-e(.72,1,i))}heightAt(e,t){return this.spec.center.y+this.heightLocal(e-this.spec.center.x,t-this.spec.center.z)}contains(e,t,n=.9){return this.radial(e-this.spec.center.x,t-this.spec.center.z)<n}build(){let{depth:e,seed:t}=this.spec,n=[],r=new Y($.sage),i=new Y(`#B7C9A6`),a=new Y($.deepSage),o=new Y($.soil),s=new Y($.soilDeep),c=new Y($.rock);for(let e=0;e<=gb;e++){let a=(e/gb)**.75;n.push({rn:a,y:(e,t)=>this.heightLocal(e,t),color:(e,n)=>n.lerpColors(r,i,.5+.5*Math.sin(e*5+a*7+t)).multiplyScalar(1.02-a*.06)})}n.push({rn:1.012,y:()=>-.07,color:(e,t)=>t.copy(r).lerp(a,.5)}),n.push({rn:1.02,y:()=>-.2,color:(e,t)=>t.copy(a)});for(let r=1;r<=_b;r++){let i=r/_b,a=Math.max(.02,1-i**1.45);n.push({rn:1.02*a,y:(n,r,a)=>-.2-e*i+Math.sin(a*4+t)*.15*i,color:(e,n)=>(i<.5?n.lerpColors(o,s,i*2):n.lerpColors(s,c,(i-.5)*2)).multiplyScalar(.95+.06*Math.sin(i*22+e*2+t))})}let l=[],u=[],d=new Y;n.forEach((e,n)=>{let r=n>12?(n-gb-2)/_b:0;for(let n=0;n<hb;n++){let i=n/hb*Math.PI*2,a=1+.07*Math.sin(i*6+r*9+t)*Math.sin(r*Math.PI),o=this.radiusAt(i)*e.rn*a,s=Math.cos(i)*o,c=Math.sin(i)*o;l.push(s,e.y(s,c,i),c),e.color(i,d),u.push(d.r,d.g,d.b)}});let f=[];for(let e=0;e<n.length-1;e++)for(let t=0;t<hb;t++){let n=e*hb+t,r=e*hb+(t+1)%hb,i=(e+1)*hb+t,a=(e+1)*hb+(t+1)%hb;f.push(n,r,i,r,a,i)}let p=new Nc;return p.setAttribute(`position`,new X(l,3)),p.setAttribute(`color`,new X(u,3)),p.setIndex(f),p.computeVertexNormals(),p.computeBoundingSphere(),p}},yb=class{constructor(e,t){this.group=new J,this.lanterns=[];let r=new Od(.15,24,16),i=new kd(.175,.016,8,32),a=new nu(.05,.07,.05,16),o=new nu(.008,.008,.08,6),s=new $l(.28,.006,.035),c=new Vd({color:$.ivory,emissive:`#FFDB8A`,emissiveIntensity:1.6,roughness:.3}),l=new Vd({color:$.gold,roughness:.35,metalness:.55}),u=new Vd({color:$.ivory,roughness:.5});for(let d of e){let e=new J,f=new Z(i,l);f.rotation.x=Math.PI/2;let p=new Z(a,l);p.position.y=.16;let m=new Z(o,l);m.position.y=.22;let h=new J;h.position.y=.26;let g=new Z(s,u),_=new Z(s,u);_.rotation.y=Math.PI/2,h.add(g,_),e.add(new Z(r,c),f,p,m,h),e.position.copy(d),e.scale.setScalar(n(t,.9,1.2)),this.group.add(e),this.lanterns.push({group:e,rotor:h,base:d,phase:t()*Math.PI*2})}}update(e,t,n){for(let r of this.lanterns)r.group.position.set(r.base.x+Math.sin(e*.3+r.phase)*.3*n,r.base.y+Math.sin(e*.9+r.phase)*.15*n,r.base.z+Math.cos(e*.25+r.phase)*.3*n),r.group.rotation.z=Math.sin(e*.7+r.phase)*.06*n,r.rotor.rotation.y+=t*14}},bb={sun:new Y(`#FFF2DA`),sunIntensity:2.5,sky:new Y(`#D3EAF5`),ground:new Y(`#BCCBA6`),hemiIntensity:1.25,offset:new K(-7,14,9)},xb={sun:new Y(`#FFC98E`),sunIntensity:2.3,sky:new Y(`#FFE1C2`),ground:new Y(`#D9B997`),hemiIntensity:1.15,offset:new K(-9,8,10)},Sb=class{constructor(e,t){this.sun=new jf(bb.sun,bb.sunIntensity),this.hemi=new mf(bb.sky,bb.ground,bb.hemiIntensity),this.focus=new K,this.offset=bb.offset.clone();let n=this.sun;n.castShadow=t!==`low`;let r=t===`high`?2048:1024;n.shadow.mapSize.set(r,r);let i=n.shadow.camera;i.left=i.bottom=-13,i.right=i.top=13,i.near=1,i.far=60,n.shadow.bias=-4e-4,n.shadow.normalBias=.03,n.shadow.radius=4,e.add(n,n.target,this.hemi),this.setFocus(new K)}setFocus(e){this.focus.copy(e),this.apply()}setGolden(e){this.sun.color.lerpColors(bb.sun,xb.sun,e),this.sun.intensity=bb.sunIntensity+(xb.sunIntensity-bb.sunIntensity)*e,this.hemi.color.lerpColors(bb.sky,xb.sky,e),this.hemi.groundColor.lerpColors(bb.ground,xb.ground,e),this.hemi.intensity=bb.hemiIntensity+(xb.hemiIntensity-bb.hemiIntensity)*e,this.offset.lerpVectors(bb.offset,xb.offset,e),this.apply()}apply(){this.sun.target.position.copy(this.focus),this.sun.position.copy(this.focus).add(this.offset),this.sun.target.updateMatrixWorld()}},Cb=`
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uMotion;
  attribute float aSeed;
  varying float vTwinkle;
  void main() {
    vec3 p = position;
    float s = aSeed * 6.2831;
    float t = uTime * uMotion;
    p.x += sin(t * 0.21 + s) * 0.9;
    p.y += sin(t * 0.29 + s * 1.7) * 0.55 + sin(t * 0.11 + s) * 0.3;
    p.z += cos(t * 0.17 + s * 1.3) * 0.9;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * (0.45 + aSeed) * uPixelRatio * (24.0 / max(-mv.z, 0.5));
    vTwinkle = 0.55 + 0.45 * sin(uTime * 1.4 + s * 3.0);
  }
`,wb=`
  uniform vec3 uColor;
  uniform float uOpacity;
  varying float vTwinkle;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d);
    a *= a;
    gl_FragColor = vec4(uColor * 1.6, a * vTwinkle * uOpacity);
  }
`,Tb=class{constructor(e,t){this.uniforms={uTime:{value:0},uSize:{value:2.2},uPixelRatio:{value:1},uMotion:{value:1},uColor:{value:new Y(`#FFE8A8`)},uOpacity:{value:.9}};let r=[],i=[];for(let a of e)for(let e=0;e<a.count;e++)r.push(a.center.x+n(t,-.5,.5)*a.size.x,a.center.y+n(t,0,1)*a.size.y,a.center.z+n(t,-.5,.5)*a.size.z),i.push(t());let a=new Nc;a.setAttribute(`position`,new X(r,3)),a.setAttribute(`aSeed`,new X(i,1));let o=new zd({uniforms:this.uniforms,vertexShader:Cb,fragmentShader:wb,transparent:!0,depthWrite:!1,blending:2});this.points=new Kl(a,o),this.points.frustumCulled=!1}update(e,t,n){this.uniforms.uTime.value=e,this.uniforms.uPixelRatio.value=t,this.uniforms.uMotion.value=n}},Eb=new K(22,12,22),Db=[$.pink,$.pink,`#F6D3D3`,$.ivory,$.yellow,`#F3B9C1`],Ob=class{constructor(e,t=170,r=Db){this.amount=0,this.petals=[],this.center=new K,this.m=new is,this.q=new Fo,this.p=new K,this.s=new K;let i=new Od(.07,7,4);i.scale(1,.12,.62);let o=new Vd({color:`#FFFFFF`,roughness:.7,side:2,emissive:`#FFE9E0`,emissiveIntensity:.25});this.mesh=new Pl(i,o,t),this.mesh.frustumCulled=!1;let s=new Y;for(let i=0;i<t;i++)this.petals.push({offset:new K(n(e,-.5,.5)*Eb.x,n(e,-.5,.5)*Eb.y,n(e,-.5,.5)*Eb.z),vel:new K(n(e,.5,1.1),n(e,-.45,-.15),n(e,-.25,.25)),rot:new ms(e()*6,e()*6,e()*6),spin:new K(n(e,-2,2),n(e,-1.5,1.5),n(e,-2,2)),scale:n(e,.7,1.4)}),this.mesh.setColorAt(i,s.set(a(e,r)));this.mesh.count=0}update(e,t,n,r){let i=Math.round(this.petals.length*this.amount);if(this.mesh.count=i,i!==0){this.center.copy(t).addScaledVector(n,Eb.z*.45);for(let t=0;t<i;t++){let n=this.petals[t];n.offset.addScaledVector(n.vel,e*r);for(let e of[`x`,`y`,`z`]){let t=Eb[e]/2;n.offset[e]>t&&(n.offset[e]-=Eb[e]),n.offset[e]<-t&&(n.offset[e]+=Eb[e])}n.rot.x+=n.spin.x*e*r,n.rot.y+=n.spin.y*e*r,n.rot.z+=n.spin.z*e*r,this.q.setFromEuler(n.rot),this.m.compose(this.p.copy(this.center).add(n.offset),this.q,this.s.setScalar(n.scale)),this.mesh.setMatrixAt(t,this.m)}this.mesh.instanceMatrix.needsUpdate=!0}}},kb=`
  varying vec3 vDir;
  void main() {
    vDir = position;
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww; // always at the far plane
  }
`,Ab=`
  uniform vec3 uTopDay;
  uniform vec3 uMidDay;
  uniform vec3 uHorizonDay;
  uniform vec3 uTopGold;
  uniform vec3 uMidGold;
  uniform vec3 uHorizonGold;
  uniform vec3 uBelow;
  uniform vec3 uSunDir;
  uniform float uGolden;
  varying vec3 vDir;

  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 top = mix(uTopDay, uTopGold, uGolden);
    vec3 mid = mix(uMidDay, uMidGold, uGolden);
    vec3 hor = mix(uHorizonDay, uHorizonGold, uGolden);
    vec3 col = mix(hor, mid, smoothstep(0.0, 0.22, h));
    col = mix(col, top, smoothstep(0.18, 0.75, h));
    col = mix(col, mix(uBelow, hor, 0.45), smoothstep(0.0, -0.3, h));

    float s = max(dot(d, normalize(uSunDir)), 0.0);
    vec3 sunCol = mix(vec3(1.0, 0.95, 0.82), vec3(1.0, 0.74, 0.45), uGolden);
    col += sunCol * (pow(s, 5.0) * (0.18 + 0.2 * uGolden) + pow(s, 48.0) * 0.45);
    col += sunCol * smoothstep(0.9975, 0.9988, s) * 1.6;

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`,jb=class{constructor(){this.group=new J,this.uniforms={uTopDay:{value:new Y(`#8EC6E6`)},uMidDay:{value:new Y($.powder)},uHorizonDay:{value:new Y($.ivory)},uTopGold:{value:new Y(`#A9B9E0`)},uMidGold:{value:new Y(`#F2C9B8`)},uHorizonGold:{value:new Y(`#FFD99C`)},uBelow:{value:new Y(`#DCEBF2`)},uSunDir:{value:new K(-.38,.5,-.78).normalize()},uGolden:{value:0}},this.daySun=new K(-.38,.5,-.78).normalize(),this.goldSun=new K(-.62,.12,-.78).normalize();let e=new zd({uniforms:this.uniforms,vertexShader:kb,fragmentShader:Ab,side:1,depthWrite:!1,fog:!1}),t=new Z(new Od(400,48,24),e);t.renderOrder=-10,t.frustumCulled=!1,this.group.add(t)}setGolden(e){this.uniforms.uGolden.value=e,this.uniforms.uSunDir.value.lerpVectors(this.daySun,this.goldSun,e).normalize()}horizon(e){return e.lerpColors(this.uniforms.uHorizonDay.value,this.uniforms.uHorizonGold.value,this.uniforms.uGolden.value)}follow(e){this.group.position.copy(e.position)}},Mb=`
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aSeed;
  varying float vTwinkle;
  void main() {
    vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    gl_Position = p.xyww;
    gl_PointSize = (2.5 + aSeed * 5.0) * uPixelRatio;
    vTwinkle = 0.45 + 0.55 * pow(0.5 + 0.5 * sin(uTime * (0.8 + aSeed * 1.6) + aSeed * 40.0), 2.0);
  }
`,Nb=`
  uniform float uOpacity;
  varying float vTwinkle;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    // A soft dot with a faint four-point sparkle.
    float core = smoothstep(0.5, 0.0, d);
    float rays = max(0.0, 1.0 - abs(c.x) * 14.0) * max(0.0, 1.0 - abs(c.y) * 2.2)
               + max(0.0, 1.0 - abs(c.y) * 14.0) * max(0.0, 1.0 - abs(c.x) * 2.2);
    float a = (core * core + rays * 0.5) * vTwinkle * uOpacity;
    gl_FragColor = vec4(vec3(1.0, 0.93, 0.75) * 1.8, a);
  }
`,Pb=class{constructor(e,t=260){this.uniforms={uTime:{value:0},uPixelRatio:{value:1},uOpacity:{value:0}};let n=[],r=[];for(let i=0;i<t;i++){let t=.12+e()*.85,i=e()*Math.PI*2,a=Math.sqrt(1-t*t);n.push(Math.cos(i)*a*300,t*300,Math.sin(i)*a*300),r.push(e())}let i=new Nc;i.setAttribute(`position`,new X(n,3)),i.setAttribute(`aSeed`,new X(r,1)),this.points=new Kl(i,new zd({uniforms:this.uniforms,vertexShader:Mb,fragmentShader:Nb,transparent:!0,depthWrite:!1,blending:2})),this.points.frustumCulled=!1,this.points.renderOrder=-9}update(e,t){this.uniforms.uTime.value=e,this.uniforms.uPixelRatio.value=t,this.points.visible=this.uniforms.uOpacity.value>.001}},Fb=class{constructor(e,t){this.m=new is,this.q=new Fo,this.e=new ms,this.p=new K,this.s=new K;let r=new bd(Qg(.16,.075),{depth:.04,bevelEnabled:!0,bevelThickness:.03,bevelSize:.028,bevelSegments:3,curveSegments:1});r.center();let i=new Vd({color:$.yellow,emissive:`#FFD978`,emissiveIntensity:1.7,roughness:.35,metalness:.1});this.mesh=new Pl(r,i,e.length),this.mesh.frustumCulled=!1,this.charms=e.map(e=>({base:e,phase:t()*Math.PI*2,spin:n(t,.3,.7)*(t()<.5?-1:1),scale:n(t,.7,1.25)})),this.update(0,1)}update(e,t){this.charms.forEach((n,r)=>{this.p.copy(n.base),this.p.y+=Math.sin(e*.8+n.phase)*.18*t,this.e.set(Math.sin(e*.5+n.phase)*.25,e*n.spin*t+n.phase,0),this.q.setFromEuler(this.e),this.m.compose(this.p,this.q,this.s.setScalar(n.scale)),this.mesh.setMatrixAt(r,this.m)}),this.mesh.instanceMatrix.needsUpdate=!0}},Ib=[{angle:-2.6,rn:.78,scale:1.25},{angle:-1.25,rn:.8,scale:1.1,blossom:!0},{angle:-.45,rn:.7,scale:.95},{angle:.3,rn:.76,scale:1,blossom:!0},{angle:2.85,rn:.72,scale:1.05},{angle:-1.95,rn:.88,scale:.8}],Lb=[{angle:-2.8,rn:.78,scale:1.3},{angle:-2.2,rn:.84,scale:1.1,blossom:!0},{angle:-1.6,rn:.8,scale:1.45},{angle:-1,rn:.82,scale:1.15,blossom:!0},{angle:-.4,rn:.78,scale:1.25},{angle:.3,rn:.82,scale:1},{angle:2.8,rn:.8,scale:1.05,blossom:!0},{angle:2.3,rn:.86,scale:.85},{angle:-1.3,rn:.62,scale:.75}];function Rb(){let e=[];for(let t=0;t<11;t++){let n=t/10;e.push([1.6+-2.35*n+Math.sin(n*Math.PI)*.7,6.6+-7.6*n])}return e}function zb(){return[[.2,10.4],[-.15,9.5],[.25,8.6],[1.5,6.3],[1.7,5.4],[1.3,4.5],[.9,3.6]]}var Bb=class e{constructor(e,t,n){this.stage=e,this.group=new J,this.sky=new jb,this.gardenBloom={value:.5},this.golden={value:0},this.fogColor=new Y,this.camDir=new K,this.lights=new Sb(e.scene,e.tier),this.islandA=new vb(K_),this.islandB=new vb(q_,this.gardenBloom),this.stars=new Pb(t),this.petals=new Ob(t,e.tier===`low`?90:170,n),this.butterflies=new Qy([{center:new K(.5,0,1),radius:3.5,count:3,visible:3},{center:Y_.gardenCenter.clone(),radius:4.2,count:12,visible:2}],t),this.fog=new zs(this.sky.horizon(new Y),80,340),e.scene.fog=this.fog,this.sky.group.add(this.stars.points),this.group.add(this.sky.group,this.islandA.mesh,this.islandB.mesh,this.petals.mesh,this.butterflies.group)}static async create(t,i){let a=r(20261106),o=new e(t,a,i.petalColors),s=t.tier===`low`;i.report(.15),await Yy();let c=J_.map(e=>new vb(e));c.forEach((e,t)=>{o.group.add(e.mesh),o.group.add(cb(e,{trees:[{angle:t*1.3,rn:.25,scale:n(a,.65,.9),blossom:t%3==1}],rocks:1},a))});let l={x:Y_.door.x-K_.center.x,z:Y_.door.z-K_.center.z},u=Rb(),d=zb(),f=(e,t,n,r)=>e.some(([e,i])=>Math.hypot(e-t,i-n)<r);o.group.add(cb(o.islandA,{trees:Ib,rocks:7,stones:u,avoid:(e,t)=>f(u,e,t,.8)||Math.hypot(e-l.x,t-l.z)<2},a));let p={x:Y_.pocket.x-q_.center.x,z:Y_.pocket.z-q_.center.z},m={x:Y_.gardenCenter.x-q_.center.x,z:Y_.gardenCenter.z-q_.center.z};o.group.add(cb(o.islandB,{trees:Lb,rocks:10,stones:d,avoid:(e,t)=>f(d,e,t,.8)||Math.hypot(e-p.x,t-p.z)<2.2||Math.hypot(e-m.x,t-m.z)<5},a,o.gardenBloom)),i.report(.4),await Yy();let h=(e,t,n)=>{let r=[],i=e.spec.center;for(let o=0;r.length<t&&o<t*6;o++){let t=a()*Math.PI*2,o=Math.sqrt(a())*e.radiusAt(t)*.93,s=i.x+Math.cos(t)*o,c=i.z+Math.sin(t)*o;n(s,c)||r.push({x:s,y:e.heightAt(s,c),z:c})}return r},g=(e,t)=>f(u,e-K_.center.x,t-K_.center.z,.42)||Math.hypot(e-Y_.door.x,t-Y_.door.z)<1.5||Math.hypot(e-Y_.robotWelcome.x,t-Y_.robotWelcome.z)<.6,_=(e,t)=>f(d,e-q_.center.x,t-q_.center.z,.42)||Math.hypot(e-Y_.pocket.x,t-Y_.pocket.z)<1.4||i.wishSpots.some(n=>Math.hypot(e-n.x,t-n.z)<.7),v=s?.55:1,y=c.flatMap(e=>h(e,Math.round(18*v),()=>!1)),b=c.flatMap(e=>h(e,Math.round(30*v),()=>!1));o.group.add(mb([...h(o.islandA,Math.round(190*v),g),...y],[...h(o.islandA,Math.round(560*v),g),...b],a,{value:1})),i.report(.65),await Yy(),o.group.add(mb(h(o.islandB,Math.round(480*v),_),h(o.islandB,Math.round(1300*v),_),a,o.gardenBloom)),i.report(.8),await Yy(),o.clouds=new tb(a),o.motes=new Tb([{center:new K(0,-.2,0),size:new K(16,5,16),count:s?60:140},{center:new K(46,-3.2,-40),size:new K(22,5,22),count:s?90:220}],a);let x=[];for(let e=0;e<24;e++){let t=e<10,r=t?K_.center:q_.center,i=t?9:13,o=a()*Math.PI*2;x.push(new K(r.x+Math.cos(o)*n(a,.6,1.1)*i,r.y+n(a,2.2,5.5),r.z+Math.sin(o)*n(a,.6,1.1)*i))}return o.charms=new Fb(x,a),o.lanterns=new yb([new K(-2.8,2.4,-1.4),new K(2.9,2.7,-2.8),new K(3.8,2,2),new K(42.2,-.5,-35),new K(50.6,.1,-37.4),new K(43,.5,-45),new K(49.6,.9,-46.4)],a),o.group.add(o.clouds.group,o.motes.points,o.charms.mesh,o.lanterns.group),i.report(1),o}setGolden(e,t=0){return new Promise(n=>{H.killTweensOf(this.golden),H.to(this.golden,{value:e,duration:t,ease:`sine.inOut`,onUpdate:()=>this.applyGolden(),onComplete:()=>n()}),t===0&&this.applyGolden()})}applyGolden(){let e=this.golden.value;this.sky.setGolden(e),this.lights.setGolden(e)}setGardenBloom(e,t=1.6){H.to(this.gardenBloom,{value:e,duration:t,ease:`sine.out`,overwrite:!0})}setStars(e,t){H.to(this.stars.uniforms.uOpacity,{value:e,duration:t,ease:`sine.inOut`,overwrite:!0})}setPetals(e,t){H.to(this.petals,{amount:e,duration:t,ease:`sine.inOut`,overwrite:!0})}update(e,t,n,r){nb.uTime.value=e,nb.uWind.value=.4+.6*r,this.sky.follow(n),this.fog.color.copy(this.sky.horizon(this.fogColor));let i=this.stage.currentPixelRatio;this.stars.update(e,i),this.motes.update(e,i,r),this.clouds.update(e,t,r),this.charms.update(e,r),this.lanterns.update(e,t,r),this.butterflies.update(e,t,r),n.getWorldDirection(this.camDir),this.petals.update(t,n.position,this.camDir,r)}},Vb=[`#FFE8A8`,`#F5DF9B`,`#E8BFC0`,`#C7E5F2`,`#FFFFFF`];async function Hb(e){let{rig:n,robot:r,door:i,panel:a,speech:o,picker:s}=e,c=new Xy;if(e.dots.set(1),r.moveTo(e.ground(Y_.robotDoor),2.6),await e.travel(Z_.door,3.2),await new Promise(e=>{let n=!1,l=()=>{n||(n=!0,e())},u=s.add(i.proxy,{onClick:l,onHover:e=>i.setHover(e)});c.add(()=>u.remove()),a.show({placement:`bottom`,text:t.door.text,actions:[{label:`✨ ${t.door.hint}`,onClick:l,variant:`ghost`}]}),c.timeout(()=>o.show(t.robot.door,r.speechAnchor,{duration:4e3}),700),c.interval(()=>{i.setHover(!0),setTimeout(()=>i.setHover(!1),700)},6e3)}),c.dispose(),i.setHover(!1),o.hide(),a.hide(),e.audio.play(`whoosh`),r.setHappy(!0),await i.open(),e.motion.reduced)await e.flash.in(.6);else{let t=n.fly(Z_.doorThrough,1.9,`power2.in`);await Jy(1e3),await e.flash.in(.8),await t}r.setHappy(!1),i.reset(),e.world.lights.setFocus(q_.center),r.teleport(e.ground(Y_.robotPocket)),n.set(Z_.pocketArrive)}async function Ub(e){let{rig:n,robot:r,panel:i,speech:a,world:o}=e,s=new Xy,c=t.finale;e.dots.set(5),o.setGolden(1,6),o.setStars(1,6),o.setPetals(1,4),r.teleport(e.ground(Y_.robotFinale)),r.lookAt(null),await e.travel(Z_.finaleStart,2.6),r.wave(3),e.audio.play(`sparkle`),e.burst(r.speechAnchor.getWorldPosition(r.root.position.clone()),e.sparkles,80),a.show(t.robot.finale,r.speechAnchor,{duration:4500}),s.interval(()=>r.wave(2),5200),e.motion.reduced?s.timeout(()=>void e.travel(Z_.finaleEnd,0),4e3):s.timeout(()=>void n.fly(Z_.finaleEnd,12,`sine.inOut`),1800),await new Promise(e=>{s.timeout(()=>{i.show({placement:`top`,size:`hero`,title:c.title,text:c.text,actions:[{label:`☀️ ${c.button}`,onClick:()=>e()}]})},2600)}),s.dispose(),a.hide(),await i.hide(),await e.flash.in(1),o.setGolden(0,0),o.setStars(0,.01),o.setPetals(0,.01),o.lights.setFocus(K_.center),e.door.reset()}var Wb=.5;async function Gb(e){let{robot:n,garden:r,panel:i,speech:a,wish:o,picker:s,world:c}=e,l=new Xy,u=t.garden;e.dots.set(3),n.moveTo(e.ground(Y_.robotGarden),3),await e.travel(Z_.garden,3.4);let d=()=>{},f=new Promise(e=>d=e),p=r.flowers.length,m=()=>{let e=[];return r.bloomedCount<p&&e.push({label:`🌸 ${u.pick}`,onClick:()=>v(),variant:`ghost`}),r.bloomedCount>0&&e.push({label:`${u.next} →`,onClick:()=>d()}),e},h=()=>{let e=r.bloomedCount;c.setGardenBloom(Wb+e/p*.5),c.butterflies.setVisible(1,2+Math.round(e/p*10))},g=!1,_=s=>{g=!0;let d=s.head.getWorldPosition(new K),f=t.flowerMessages[s.index%t.flowerMessages.length];if(a.hide(),s.bloomed)e.audio.play(`boop`);else{let f=r.bloomedCount===0;s.bloom(),e.audio.play(`bloom`),e.burst(d,[`#FFFFFF`,`#FFE8A8`,s.tone],60),h(),(f||r.bloomedCount===p)&&i.setActions(m()),r.bloomedCount===p&&(i.setText(u.full),n.react(),l.timeout(()=>{o.hide(),a.show(t.robot.allBloomed,n.speechAnchor,{duration:3500})},2800),c.setGardenBloom(1,2.5))}o.show(f,s.head,{offsetY:.35})},v=()=>{let e=r.nextUnbloomed();e&&_(e)};for(let e of r.flowers){let t=s.add(e.proxy,{onClick:()=>_(e),onHover:t=>e.setHover(t)});l.add(()=>t.remove())}h(),i.show({placement:`bottom`,title:u.title,text:r.bloomedCount===p?u.full:u.text,actions:m()}),l.timeout(()=>{g||a.show(t.robot.garden,n.speechAnchor,{duration:4e3})},500),await f,l.dispose(),r.flowers.forEach(e=>e.setHover(!1)),o.hide(),a.hide(),await i.hide()}async function Kb(e){e.dots.set(4),e.world.setGolden(.3,4),e.robot.moveTo(e.ground(Y_.robotLetter),2.6),await e.travel(Z_.letter,3.2,`power2.inOut`),document.body.classList.add(`is-reading`),await e.letter.present(),document.body.classList.remove(`is-reading`)}var qb=new s(t.pocketMessages);async function Jb(e){let{rig:n,robot:r,pocket:i,panel:a,speech:o,wish:s,picker:c}=e,l=new Xy,u=t.pocket;e.dots.set(2),e.motion.reduced?n.set(Z_.pocket):n.fly(Z_.pocket,3.2,`power3.out`),await e.flash.out(1.1),r.wave(2);let d=!1,f=0;l.timeout(()=>{f===0&&!d&&o.show(t.robot.pocket,r.speechAnchor,{duration:4200})},400);let p=()=>{},m=new Promise(e=>p=e),h=async()=>{if(d)return;d=!0,o.hide(),i.isOpen&&(s.hide(),await i.close()),e.audio.play(`pop`);let t=i.open();setTimeout(()=>e.burst(i.coreWorld(),e.sparkles,110),220),await t,s.show(qb.next(),i.messageAnchor),f++,f===1&&a.setActions([{label:u.again,onClick:()=>void h(),variant:`ghost`},{label:`${u.next} →`,onClick:()=>p()}]),d=!1},g=c.add(i.proxy,{onClick:()=>void h(),onHover:e=>i.setHover(e)});l.add(()=>g.remove()),a.show({placement:`bottom`,title:u.title,text:u.text,actions:[{label:u.open,onClick:()=>void h()}]}),await m,l.dispose(),i.setHover(!1),s.hide(),o.hide(),i.close(),await a.hide()}async function Yb(e,n){let{rig:r,robot:i,panel:a,speech:o,world:s}=e,c=new Xy;e.dots.set(0),s.lights.setFocus(K_.center),i.teleport(e.ground(Y_.robotWelcome)),i.lookAt(null),r.set(Z_.welcomeStart),n&&await e.flash.out(1),e.motion.reduced?r.set(Z_.welcomeEnd):r.fly(Z_.welcomeEnd,7.5,`power2.inOut`),c.timeout(()=>{i.wave(2),e.audio.play(`boop`),o.show(t.robot.hello,i.speechAnchor,{duration:5200})},e.motion.reduced?1400:4600),await new Promise(e=>{c.timeout(()=>{a.show({placement:`top`,size:`hero`,title:t.welcome.title,text:t.welcome.text,actions:[{label:t.welcome.button,onClick:()=>e()}]})},1200)}),c.dispose(),o.hide(),e.audio.play(`sparkle`),await a.hide()}async function Xb(e){let t=!1;for(;;)await Yb(e,t),await Hb(e),await Jb(e),await Gb(e),await Kb(e),await Ub(e),t=!0}var Zb=class{constructor(e){this.el=i(`div`,{class:`flash`,attrs:{"aria-hidden":`true`}}),e.append(this.el)}in(e=.7){return new Promise(t=>{H.to(this.el,{opacity:1,duration:e,ease:`sine.in`,overwrite:!0,onComplete:()=>t()})})}out(e=.9){return new Promise(t=>{H.to(this.el,{opacity:0,duration:e,ease:`sine.out`,overwrite:!0,onComplete:()=>t()})})}},Qb=class{constructor(e,n,r){this.motion=n,this.onSound=r;let a=t.letter;this.flap=i(`span`,{class:`env-flap`}),this.seal=i(`span`,{class:`env-seal`,text:`☀`}),this.envelope=i(`button`,{class:`envelope`,attrs:{type:`button`,"aria-label":a.open}},[i(`span`,{class:`env-back`}),i(`span`,{class:`env-peek`}),i(`span`,{class:`env-front`}),this.flap,this.seal]),this.lines=[i(`p`,{class:`letter-salutation`,text:a.salutation}),...a.paragraphs.map(e=>i(`p`,{text:e})),i(`p`,{class:`letter-closing`,text:a.closing}),i(`p`,{class:`letter-signature`,text:a.signature})],this.paper=i(`div`,{class:`letter-paper`,attrs:{tabindex:`0`}},[i(`span`,{class:`letter-doodle`,attrs:{"aria-hidden":`true`}}),...this.lines]),this.fold=i(`div`,{class:`letter-fold`,attrs:{"aria-hidden":`true`}}),this.card=i(`article`,{class:`letter-card`,attrs:{"aria-label":t.letter.heading}},[this.paper,this.fold]),this.heading=i(`h2`,{class:`letter-heading`,text:a.heading,attrs:{id:`letter-heading`}}),this.actions=i(`div`,{class:`letter-actions`}),this.layer=i(`div`,{class:`letter-layer`,attrs:{role:`dialog`,"aria-modal":`true`,"aria-labelledby":`letter-heading`}},[this.heading,i(`div`,{class:`letter-stage`},[this.envelope,this.card]),this.actions]),this.layer.hidden=!0,e.append(this.layer)}button(e,t){let n=i(`button`,{class:`btn btn-primary`,text:e,attrs:{type:`button`}});return n.addEventListener(`click`,t,{once:!0}),this.actions.replaceChildren(n),n}async present(){this.reset(),this.layer.hidden=!1,await o(20),this.layer.classList.add(`is-visible`),H.fromTo(this.envelope,{y:40,opacity:0,rotate:-4},{y:0,opacity:1,rotate:0,duration:.9,ease:`back.out(1.4)`}),await new Promise(e=>{let n=!1,r=()=>{n||(n=!0,e())};this.envelope.addEventListener(`click`,r,{once:!0}),this.button(t.letter.open,r).focus({preventScroll:!0})}),this.actions.replaceChildren(),await this.unfold(),await new Promise(e=>{let n=this.button(t.letter.next,()=>e());H.fromTo(n,{opacity:0,y:8},{opacity:1,y:0,duration:.5}),this.paper.focus({preventScroll:!0})}),this.layer.classList.remove(`is-visible`),await o(600),this.layer.hidden=!0}unfold(){this.onSound(`page`);let e=this.motion.reduced;return new Promise(t=>{let n=H.timeline({onComplete:()=>t()});e?n.to(this.envelope,{opacity:0,duration:.4}).set(this.envelope,{display:`none`}).set(this.card,{display:`flex`,clipPath:`inset(0% 0 0 0)`}).set(this.fold,{display:`none`}).fromTo(this.card,{opacity:0},{opacity:1,duration:.5}).to(this.lines,{opacity:1,duration:.4}):n.to(this.seal,{scale:0,opacity:0,duration:.3,ease:`back.in(2)`}).to(this.flap,{rotateX:180,duration:.6,ease:`power2.inOut`}).set(this.flap,{zIndex:0}).to(this.envelope,{y:`38vh`,opacity:0,duration:.8,ease:`power2.in`},`+=0.15`).set(this.card,{display:`flex`},`<`).fromTo(this.card,{y:120,opacity:0,scale:.92},{y:0,opacity:1,scale:1,duration:.9,ease:`power3.out`},`<0.1`).set(this.envelope,{display:`none`}).to(this.fold,{rotateX:90,duration:.45,ease:`power1.in`}).set(this.card,{clipPath:`inset(0% 0 0 0)`}).to(this.fold,{rotateX:0,duration:.5,ease:`power2.out`}).to(this.fold,{opacity:0,duration:.25}).add(()=>this.onSound(`sparkle`)).to(this.lines,{opacity:1,y:0,duration:.6,stagger:.22,ease:`sine.out`})})}reset(){H.set(this.envelope,{clearProps:`all`}),H.set(this.flap,{rotateX:0,zIndex:3}),H.set(this.seal,{scale:1,opacity:1}),H.set(this.card,{display:`none`,clipPath:`inset(50% 0 0 0)`,opacity:0}),H.set(this.fold,{display:`block`,rotateX:180,opacity:1}),H.set(this.lines,{opacity:0,y:6}),this.paper.scrollTop=0,this.actions.replaceChildren()}},$b=class{constructor(e){this.visible=!1,this.token=0,this.textEl=i(`p`,{class:`panel-text`}),this.actionsEl=i(`div`,{class:`panel-actions`}),this.body=i(`div`,{class:`panel-body`}),this.el=i(`section`,{class:`panel`,attrs:{"aria-live":`polite`}},[this.body]),e.append(this.el)}async show(e){let t=++this.token;this.visible&&(this.el.classList.remove(`is-visible`),await o(320),t!==this.token)||(this.body.replaceChildren(...[e.eyebrow?i(`p`,{class:`panel-eyebrow`,text:e.eyebrow}):null,e.title?i(e.size===`hero`?`h1`:`h2`,{class:`panel-title ${e.size===`hero`?`is-hero`:``}`,text:e.title}):null,e.text?this.textEl:null,this.actionsEl].filter(e=>!!e)),this.textEl.textContent=e.text??``,this.setActions(e.actions??[]),this.el.dataset.placement=e.placement??`bottom`,this.el.dataset.size=e.size??`normal`,requestAnimationFrame(()=>{t===this.token&&(this.el.classList.add(`is-visible`),this.visible=!0)}))}setText(e){this.textEl.textContent=e}setActions(e){this.actionsEl.replaceChildren(...e.map(e=>{let t=i(`button`,{class:`btn ${e.variant===`ghost`?`btn-ghost`:`btn-primary`}`,text:e.label,attrs:{type:`button`}});return t.addEventListener(`click`,()=>e.onClick()),t})),this.actionsEl.hidden=e.length===0}async hide(){++this.token,this.visible&&(this.visible=!1,this.el.classList.remove(`is-visible`),await o(320))}},ex=[`Welcome`,`The magical door`,`A pocket full of happiness`,`A garden of wishes`,`A little message`,`See you soon`],tx=class{constructor(e){this.dots=ex.map(()=>i(`span`,{class:`dot`,attrs:{"aria-hidden":`true`}})),this.sr=i(`span`,{class:`sr-only`}),this.el=i(`nav`,{class:`progress-dots`,attrs:{"aria-label":`Journey progress`}},[...this.dots,this.sr]),e.append(this.el)}set(e){this.dots.forEach((t,n)=>{t.classList.toggle(`is-current`,n===e),t.classList.toggle(`is-done`,n<e)}),this.sr.textContent=`Scene ${e+1} of ${ex.length}: ${ex[e]}`}},nx=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.2L12 5.6v12.8l-4.8-3.9H4z" fill="currentColor" stroke-linejoin="round"/><path d="M15.5 9a4.2 4.2 0 0 1 0 6M18 6.5a7.8 7.8 0 0 1 0 11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,rx=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9.5h3.2L12 5.6v12.8l-4.8-3.9H4z" fill="currentColor" stroke-linejoin="round"/><path d="M16 9.5l5 5M21 9.5l-5 5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,ix=class{constructor(e,t){this.on=!1,this.icon=i(`span`,{class:`sound-icon`}),this.label=i(`span`,{class:`sound-label`}),this.el=i(`button`,{class:`sound-toggle`,attrs:{type:`button`,"aria-pressed":`false`}},[this.icon,this.label]),this.el.addEventListener(`click`,()=>{this.on=!this.on,this.render(),t(this.on)}),this.render(),e.append(this.el)}render(){this.icon.innerHTML=this.on?nx:rx,this.label.textContent=this.on?t.sound.on:t.sound.off,this.el.setAttribute(`aria-pressed`,String(this.on)),this.el.setAttribute(`aria-label`,this.on?`Turn music off`:`Turn music on`)}};async function ax(e,n,r){let i=new Dg,o=Hy.effects??{},s=o.sparkleColors??Vb,c=new Yg(e,n.tier,{bloom:o.bloom}),l=new Eg(c.camera,i),u=new Og(c.renderer.domElement,c.camera),d=new wg;r(.05),await Yy();let f=tv(),p=await Bb.create(c,{wishSpots:f,petalColors:o.petalColors,report:e=>r(.05+e*.6)});c.scene.add(p.group);let m=document.createElement(`div`);m.className=`ui`,e.append(m);let h=new $b(m),g=new dv(m,c.camera,`speech`,h.el),_=new dv(m,c.camera,`wish`,h.el),v=new tx(m);new ix(m,e=>d.setEnabled(e));let y=new Qb(m,i,e=>d.play(e)),b=new Zb(m),x=qy(c),S=(e,t)=>(p.islandA.contains(e,t,1.05)?p.islandA:p.islandB).heightAt(e,t),C=e=>new K(e.x,S(e.x,e.z),e.z),w=Uy({stage:c,motion:i,groundAt:S,spots:Y_,burst:x,sparkles:s,say:(e,t,n)=>g.show(e,t,{duration:n}),play:e=>d.play(e)}),T=Hy.companion?await Hy.companion.create(w):new s_(i),E=new V_(i);E.group.position.set(Y_.door.x,p.islandA.heightAt(Y_.door.x,Y_.door.z)-.05,Y_.door.z);let D=new W_(i);D.group.position.set(Y_.pocket.x,p.islandB.heightAt(Y_.pocket.x,Y_.pocket.z)-.03,Y_.pocket.z);let O=Z_.garden,k=nv(f,Y_.robotGarden,[O.pos,O.portrait?.pos??O.pos],X_.halfWidth,X_.length),A=new uv(p.islandB,k,Hy.flowers?.tones);c.scene.add(T.root,E.group,D.group,A.group),await Wy(Hy,w,c,u),r(.72),await Yy();let j={stage:c,rig:l,picker:u,motion:i,world:p,robot:T,door:E,pocket:D,garden:A,panel:h,speech:g,wish:_,flash:b,dots:v,letter:y,audio:d,burst:x,sparkles:s,ground:C,async travel(e,t,n){i.reduced||t===0?(await b.in(.35),l.set(e),await b.out(.5)):await l.fly(e,t,n)}};return u.add(T.proxy,{onClick:()=>{T.react(),d.play(`boop`),x(T.speechAnchor.getWorldPosition(new K),s,40),g.show(a(Math.random,t.robot.pokes),T.speechAnchor,{duration:2400})}}),c.onTick((e,t)=>{let n=i.amount;p.update(e,t,c.camera,n),l.update(e,t),T.update(e,t,c.camera),E.update(e),D.update(e,c.camera.position),A.update(e,n),g.update(),_.update()}),l.set({pos:new K(19,11,33),target:new K(0,1,0)}),l.update(0,0),r(.8),await Yy(),await c.compile(),r(1),c.start(),Xb(j),()=>{u.dispose(),l.dispose(),i.dispose(),d.dispose(),c.dispose(),i_(),m.remove()}}export{ax as startExperience};