fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {

        if (typeof(collection) === "object") {

          for (key in collection) {

            iteratee(collection[key])
          }

        } else {

          for (el of collection) {

            iteratee(el)

          }
        }
      return collection;
    },

    map: function(collection, iteratee) {
      const newCollectionArr = []
      if (typeof(collection) === "object") {

        for (key in collection) {

          iteratee(collection[key])
        }

      } else {

        for (el of collection) {

          newCollectionArr.push(iteratee(el))

        }
        return newCollectionArr;
      }

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
