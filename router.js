function route(pathname, handle, response, productId) { 
  console.log('pathname : ' + pathname);

  if (typeof handle[pathname] == 'function') {
    handle[pathname](response, productId);
  } else { 
    response.writeHead(404, {'Content-Type' : 'text/html'}); 
    response.write('NOT FOUND'); 
    response.end(); 
    }
}

exports.route = route;

// router는 route를 분배하는 역할을 전담함