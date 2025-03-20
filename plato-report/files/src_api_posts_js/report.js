__report = {"info":{"file":"src/api/posts.js","fileShort":"src/api/posts.js","fileSafe":"src_api_posts_js","link":"files/src_api_posts_js/index.html"},"complexity":{"methodAggregate":{"cyclomatic":96,"cyclomaticDensity":28.07,"halstead":{"bugs":7.832,"difficulty":58.566,"effort":1376023.581,"length":2754,"time":76445.754,"vocabulary":370,"volume":23495.425,"operands":{"distinct":343,"total":1488,"identifiers":["__stripped__"]},"operators":{"distinct":27,"total":1266,"identifiers":["__stripped__"]}},"params":67,"sloc":{"logical":342,"physical":545}},"settings":{"commonjs":true,"forin":false,"logicalor":true,"switchcase":true,"trycatch":false,"newmi":true},"classes":[],"dependencies":[{"line":3,"path":"validator","type":"cjs"},{"line":4,"path":"lodash","type":"cjs"},{"line":6,"path":"../database","type":"cjs"},{"line":7,"path":"../utils","type":"cjs"},{"line":8,"path":"../user","type":"cjs"},{"line":9,"path":"../posts","type":"cjs"},{"line":10,"path":"../posts/cache","type":"cjs"},{"line":11,"path":"../topics","type":"cjs"},{"line":12,"path":"../groups","type":"cjs"},{"line":13,"path":"../plugins","type":"cjs"},{"line":14,"path":"../meta","type":"cjs"},{"line":15,"path":"../events","type":"cjs"},{"line":16,"path":"../privileges","type":"cjs"},{"line":17,"path":"./helpers","type":"cjs"},{"line":18,"path":"../socket.io","type":"cjs"},{"line":19,"path":"../socket.io/helpers","type":"cjs"},{"line":20,"path":"express","type":"cjs"}],"errors":[],"lineEnd":545,"lineStart":1,"maintainability":61.784,"methods":[{"cyclomatic":5,"cyclomaticDensity":25,"halstead":{"bugs":0.207,"difficulty":13.224,"effort":8200.506,"length":115,"time":455.584,"vocabulary":42,"volume":620.117,"operands":{"distinct":29,"total":59,"identifiers":["__stripped__"]},"operators":{"distinct":13,"total":56,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":20,"physical":26},"errors":[],"lineEnd":51,"lineStart":26,"name":"<anonymous>"},{"cyclomatic":9,"cyclomaticDensity":90,"halstead":{"bugs":0.216,"difficulty":12.8,"effort":8282.6,"length":120,"time":460.144,"vocabulary":42,"volume":647.078,"operands":{"distinct":30,"total":64,"identifiers":["__stripped__"]},"operators":{"distinct":12,"total":56,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":10,"physical":23},"errors":[],"lineEnd":75,"lineStart":53,"name":"<anonymous>"},{"cyclomatic":3,"cyclomaticDensity":42.857,"halstead":{"bugs":0.074,"difficulty":7.594,"effort":1692.686,"length":48,"time":94.038,"vocabulary":25,"volume":222.905,"operands":{"distinct":16,"total":27,"identifiers":["__stripped__"]},"operators":{"distinct":9,"total":21,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":7,"physical":9},"errors":[],"lineEnd":85,"lineStart":77,"name":"<anonymous>"},{"cyclomatic":3,"cyclomaticDensity":33.333,"halstead":{"bugs":0.109,"difficulty":9.625,"effort":3147.153,"length":66,"time":174.842,"vocabulary":31,"volume":326.977,"operands":{"distinct":20,"total":35,"identifiers":["__stripped__"]},"operators":{"distinct":11,"total":31,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":9,"physical":11},"errors":[],"lineEnd":97,"lineStart":87,"name":"<anonymous>"},{"cyclomatic":6,"cyclomaticDensity":42.857,"halstead":{"bugs":0.18,"difficulty":13.25,"effort":7143.221,"length":102,"time":396.846,"vocabulary":39,"volume":539.111,"operands":{"distinct":26,"total":53,"identifiers":["__stripped__"]},"operators":{"distinct":13,"total":49,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":14,"physical":17},"errors":[],"lineEnd":115,"lineStart":99,"name":"<anonymous>"},{"cyclomatic":20,"cyclomaticDensity":38.462,"halstead":{"bugs":1.063,"difficulty":28.295,"effort":90214.593,"length":472,"time":5011.922,"vocabulary":108,"volume":3188.307,"operands":{"distinct":88,"total":249,"identifiers":["__stripped__"]},"operators":{"distinct":20,"total":223,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":52,"physical":72},"errors":[],"lineEnd":188,"lineStart":117,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.013,"difficulty":1.143,"effort":43.473,"length":12,"time":2.415,"vocabulary":9,"volume":38.039,"operands":{"distinct":7,"total":8,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":4,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":186,"lineStart":186,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":25,"halstead":{"bugs":0.019,"difficulty":1.833,"effort":105.159,"length":16,"time":5.842,"vocabulary":12,"volume":57.359,"operands":{"distinct":9,"total":11,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":5,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":4,"physical":7},"errors":[],"lineEnd":196,"lineStart":190,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":25,"halstead":{"bugs":0.019,"difficulty":1.833,"effort":105.159,"length":16,"time":5.842,"vocabulary":12,"volume":57.359,"operands":{"distinct":9,"total":11,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":5,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":4,"physical":7},"errors":[],"lineEnd":204,"lineStart":198,"name":"<anonymous>"},{"cyclomatic":5,"cyclomaticDensity":38.462,"halstead":{"bugs":0.178,"difficulty":13.154,"effort":7041.104,"length":102,"time":391.172,"vocabulary":38,"volume":535.289,"operands":{"distinct":26,"total":57,"identifiers":["__stripped__"]},"operators":{"distinct":12,"total":45,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":13,"physical":20},"errors":[],"lineEnd":225,"lineStart":206,"name":"deleteOrRestore"},{"cyclomatic":3,"cyclomaticDensity":50,"halstead":{"bugs":0.073,"difficulty":7.105,"effort":1553.276,"length":45,"time":86.293,"vocabulary":29,"volume":218.609,"operands":{"distinct":19,"total":27,"identifiers":["__stripped__"]},"operators":{"distinct":10,"total":18,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":6,"physical":14},"errors":[],"lineEnd":240,"lineStart":227,"name":"deleteOrRestoreTopicOf"},{"cyclomatic":8,"cyclomaticDensity":30.769,"halstead":{"bugs":0.375,"difficulty":13.663,"effort":15375.861,"length":189,"time":854.215,"vocabulary":62,"volume":1125.343,"operands":{"distinct":49,"total":103,"identifiers":["__stripped__"]},"operators":{"distinct":13,"total":86,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":26,"physical":42},"errors":[],"lineEnd":283,"lineStart":242,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":50,"halstead":{"bugs":0.054,"difficulty":8.636,"effort":1403.545,"length":37,"time":77.975,"vocabulary":21,"volume":162.516,"operands":{"distinct":11,"total":19,"identifiers":["__stripped__"]},"operators":{"distinct":10,"total":18,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":4,"physical":10},"errors":[],"lineEnd":294,"lineStart":285,"name":"isMainAndLastPost"},{"cyclomatic":8,"cyclomaticDensity":50,"halstead":{"bugs":0.289,"difficulty":15.868,"effort":13749.568,"length":156,"time":763.865,"vocabulary":47,"volume":866.516,"operands":{"distinct":34,"total":83,"identifiers":["__stripped__"]},"operators":{"distinct":13,"total":73,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":16,"physical":33},"errors":[],"lineEnd":328,"lineStart":296,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.013,"difficulty":1.929,"effort":76.879,"length":12,"time":4.271,"vocabulary":10,"volume":39.863,"operands":{"distinct":7,"total":9,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":3,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":332,"lineStart":330,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.013,"difficulty":1.929,"effort":76.879,"length":12,"time":4.271,"vocabulary":10,"volume":39.863,"operands":{"distinct":7,"total":9,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":3,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":336,"lineStart":334,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.013,"difficulty":1.929,"effort":76.879,"length":12,"time":4.271,"vocabulary":10,"volume":39.863,"operands":{"distinct":7,"total":9,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":3,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":340,"lineStart":338,"name":"<anonymous>"},{"cyclomatic":10,"cyclomaticDensity":50,"halstead":{"bugs":0.343,"difficulty":17.012,"effort":17486.866,"length":177,"time":971.493,"vocabulary":56,"volume":1027.902,"operands":{"distinct":41,"total":93,"identifiers":["__stripped__"]},"operators":{"distinct":15,"total":84,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":20,"physical":36},"errors":[],"lineEnd":377,"lineStart":342,"name":"<anonymous>"},{"cyclomatic":5,"cyclomaticDensity":21.739,"halstead":{"bugs":0.199,"difficulty":18.75,"effort":11198.446,"length":113,"time":622.136,"vocabulary":39,"volume":597.25,"operands":{"distinct":24,"total":60,"identifiers":["__stripped__"]},"operators":{"distinct":15,"total":53,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":23,"physical":32},"errors":[],"lineEnd":410,"lineStart":379,"name":"<anonymous>"},{"cyclomatic":3,"cyclomaticDensity":37.5,"halstead":{"bugs":0.145,"difficulty":9.2,"effort":4011.099,"length":85,"time":222.839,"vocabulary":35,"volume":435.989,"operands":{"distinct":25,"total":46,"identifiers":["__stripped__"]},"operators":{"distinct":10,"total":39,"identifiers":["__stripped__"]}},"params":3,"sloc":{"logical":8,"physical":26},"errors":[],"lineEnd":437,"lineStart":412,"name":"canSeeVotes"},{"cyclomatic":6,"cyclomaticDensity":0,"halstead":{"bugs":0.049,"difficulty":4.071,"effort":598.278,"length":34,"time":33.238,"vocabulary":20,"volume":146.946,"operands":{"distinct":14,"total":19,"identifiers":["__stripped__"]},"operators":{"distinct":6,"total":15,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":0,"physical":8},"errors":[],"lineEnd":434,"lineStart":427,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.013,"difficulty":1.929,"effort":76.879,"length":12,"time":4.271,"vocabulary":10,"volume":39.863,"operands":{"distinct":7,"total":9,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":3,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":441,"lineStart":439,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":100,"halstead":{"bugs":0.013,"difficulty":1.929,"effort":76.879,"length":12,"time":4.271,"vocabulary":10,"volume":39.863,"operands":{"distinct":7,"total":9,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":3,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":1,"physical":3},"errors":[],"lineEnd":445,"lineStart":443,"name":"<anonymous>"},{"cyclomatic":4,"cyclomaticDensity":100,"halstead":{"bugs":0.083,"difficulty":8.25,"effort":2043.996,"length":51,"time":113.555,"vocabulary":29,"volume":247.757,"operands":{"distinct":18,"total":27,"identifiers":["__stripped__"]},"operators":{"distinct":11,"total":24,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":4,"physical":11},"errors":[],"lineEnd":457,"lineStart":447,"name":"diffsPrivilegeCheck"},{"cyclomatic":4,"cyclomaticDensity":25,"halstead":{"bugs":0.301,"difficulty":13.622,"effort":12313.514,"length":161,"time":684.084,"vocabulary":49,"volume":903.968,"operands":{"distinct":37,"total":84,"identifiers":["__stripped__"]},"operators":{"distinct":12,"total":77,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":16,"physical":32},"errors":[],"lineEnd":490,"lineStart":459,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":0,"halstead":{"bugs":0.005,"difficulty":1.333,"effort":18.575,"length":6,"time":1.032,"vocabulary":5,"volume":13.932,"operands":{"distinct":3,"total":4,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":465,"lineStart":465,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":0,"halstead":{"bugs":0.008,"difficulty":1.5,"effort":34.897,"length":9,"time":1.939,"vocabulary":6,"volume":23.265,"operands":{"distinct":4,"total":6,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":3,"identifiers":["__stripped__"]}},"params":1,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":468,"lineStart":468,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":50,"halstead":{"bugs":0.01,"difficulty":2.625,"effort":81.062,"length":11,"time":4.503,"vocabulary":7,"volume":30.881,"operands":{"distinct":4,"total":7,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":4,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":2,"physical":4},"errors":[],"lineEnd":484,"lineStart":481,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":50,"halstead":{"bugs":0.031,"difficulty":2.667,"effort":248.557,"length":26,"time":13.809,"vocabulary":12,"volume":93.209,"operands":{"distinct":9,"total":16,"identifiers":["__stripped__"]},"operators":{"distinct":3,"total":10,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":2,"physical":4},"errors":[],"lineEnd":495,"lineStart":492,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":33.333,"halstead":{"bugs":0.121,"difficulty":5.926,"effort":2158.098,"length":71,"time":119.894,"vocabulary":35,"volume":364.179,"operands":{"distinct":27,"total":40,"identifiers":["__stripped__"]},"operators":{"distinct":8,"total":31,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":6,"physical":10},"errors":[],"lineEnd":506,"lineStart":497,"name":"<anonymous>"},{"cyclomatic":3,"cyclomaticDensity":42.857,"halstead":{"bugs":0.102,"difficulty":10.694,"effort":3273.065,"length":63,"time":181.837,"vocabulary":29,"volume":306.053,"operands":{"distinct":18,"total":35,"identifiers":["__stripped__"]},"operators":{"distinct":11,"total":28,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":7,"physical":13},"errors":[],"lineEnd":520,"lineStart":508,"name":"<anonymous>"},{"cyclomatic":3,"cyclomaticDensity":17.647,"halstead":{"bugs":0.228,"difficulty":14.559,"effort":9972.716,"length":122,"time":554.04,"vocabulary":49,"volume":684.995,"operands":{"distinct":34,"total":66,"identifiers":["__stripped__"]},"operators":{"distinct":15,"total":56,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":17,"physical":24},"errors":[],"lineEnd":545,"lineStart":522,"name":"<anonymous>"},{"cyclomatic":1,"cyclomaticDensity":0,"halstead":{"bugs":0.009,"difficulty":1.4,"effort":39.303,"length":10,"time":2.183,"vocabulary":7,"volume":28.074,"operands":{"distinct":5,"total":7,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":3,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":540,"lineStart":540,"name":"<anonymous>"},{"cyclomatic":2,"cyclomaticDensity":0,"halstead":{"bugs":0.008,"difficulty":1.5,"effort":34.897,"length":9,"time":1.939,"vocabulary":6,"volume":23.265,"operands":{"distinct":4,"total":6,"identifiers":["__stripped__"]},"operators":{"distinct":2,"total":3,"identifiers":["__stripped__"]}},"params":2,"sloc":{"logical":0,"physical":1},"errors":[],"lineEnd":541,"lineStart":541,"name":"<anonymous>"}],"methodAverage":{"cyclomatic":3.794,"cyclomaticDensity":43.23,"halstead":{"bugs":0.135,"difficulty":7.964,"effort":6528.108,"length":73.647,"time":362.673,"vocabulary":27.971,"volume":403.897,"operands":{"distinct":19.853,"total":40.206},"operators":{"distinct":8.118,"total":33.441}},"params":1.971,"sloc":{"logical":8.676,"physical":15.029}},"module":"src/api/posts.js"},"jshint":{"messages":[{"severity":"error","line":1,"column":1,"message":"Use the function form of \"use strict\".","source":"Use the function form of \"use strict\"."},{"severity":"error","line":3,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":4,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":6,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":7,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":8,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":9,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":10,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":11,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":12,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":13,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":14,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":15,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":16,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":17,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":18,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":19,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":20,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":21,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":23,"column":1,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":26,"column":61,"message":"Expected '(' and instead saw '{'.","source":"Expected '{a}' and instead saw '{b}'."},{"severity":"error","line":27,"column":5,"message":"Expected an identifier and instead saw 'try' (a reserved word).","source":"Expected an identifier and instead saw '{a}' (a reserved word)."},{"severity":"error","line":27,"column":9,"message":"Expected ')' to match '{' from line 26 and instead saw '{'.","source":"Expected '{a}' to match '{b}' from line {c} and instead saw '{d}'."},{"severity":"error","line":27,"column":9,"message":"'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').","source":"'{a}' is only available in ES{b} (use 'esversion: {b}')."},{"severity":"error","line":28,"column":9,"message":"Expected an identifier and instead saw 'const'.","source":"Expected an identifier and instead saw '{a}'."},{"severity":"error","line":28,"column":15,"message":"Expected ')' and instead saw 'uid'.","source":"Expected '{a}' and instead saw '{b}'."},{"severity":"error","line":28,"column":19,"message":"Bad assignment.","source":"Bad assignment."},{"severity":"error","line":29,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":30,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":30,"column":9,"message":"'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":37,"column":9,"message":"'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).","source":"'{a}' is available in ES{b} (use 'esversion: {b}') or Mozilla JS extensions (use moz)."},{"severity":"error","line":37,"column":30,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":43,"column":9,"message":"Expected an assignment or function call and instead saw an expression.","source":"Expected an assignment or function call and instead saw an expression."},{"severity":"error","line":43,"column":14,"message":"Missing semicolon.","source":"Missing semicolon."},{"severity":"error","line":45,"column":72,"message":"Unrecoverable syntax error. (8% scanned).","source":"Unrecoverable syntax error."}]}}