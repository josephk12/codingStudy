let server = require('./server'); 
let router = require('./router');
let requestHandler = require('./requestHandler')

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

server.start(router.route, requestHandler.handle);
// 서버 시작 시 requestHandler의 변수 handle도 포함



// 직접 만든 모듈을 소환하는 역할을 함