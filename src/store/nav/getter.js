function topNav ({ routes }) {
  var topNav = []
  routes.forEach(item => {
    var route = {}
    route.path = item.path
    route.title = item.title
    route.name = item.name
    topNav.push(route)
  })
  return topNav
}

function leftNav ({ routes, activeTop }) {
  var leftNav = []
  for (var i = 0; i < routes.length; i++) {
    if (routes[i].path === activeTop) {
      var tem = routes[i].children
      tem.forEach(item => {
        var route = {}
        route.path = item.path
        route.title = item.title
        route.name = item.name
        if (item.children) {
          route.children = []
          item.children.forEach(item => {
            var tempRoute = {}
            tempRoute.path = item.path
            tempRoute.title = item.title
            tempRoute.name = item.name
            route.children.push(tempRoute)
          })
        }
        leftNav.push(route)
      })
    }
  }
  return leftNav
}
export default{ topNav, leftNav }
