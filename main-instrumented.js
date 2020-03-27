function cov_nfl7xbmkj() {
  var path = "/Users/gleb/git/docker-with-cypress-included-code-coverage-example/main.js";
  var hash = "10223883dc6eb7861d90a4d8cbc85c379cb417fc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/gleb/git/docker-with-cypress-included-code-coverage-example/main.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 12
        },
        end: {
          line: 3,
          column: 1
        }
      },
      "1": {
        start: {
          line: 2,
          column: 2
        },
        end: {
          line: 2,
          column: 14
        }
      },
      "2": {
        start: {
          line: 5,
          column: 12
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "3": {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 14
        }
      },
      "4": {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 14,
          column: 3
        }
      },
      "5": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 12
        }
      },
      "6": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 13
        }
      },
      "7": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 17,
          column: 16
        }
      },
      "8": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 16
        }
      },
      "9": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 19,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 12
          },
          end: {
            line: 1,
            column: 13
          }
        },
        loc: {
          start: {
            line: 1,
            column: 22
          },
          end: {
            line: 3,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 5,
            column: 12
          },
          end: {
            line: 5,
            column: 13
          }
        },
        loc: {
          start: {
            line: 5,
            column: 22
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      },
      "2": {
        name: "abs",
        decl: {
          start: {
            line: 9,
            column: 9
          },
          end: {
            line: 9,
            column: 12
          }
        },
        loc: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 14,
            column: 3
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "10223883dc6eb7861d90a4d8cbc85c379cb417fc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_nfl7xbmkj = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_nfl7xbmkj();
cov_nfl7xbmkj().s[0]++;

const add = (a, b) => {
  cov_nfl7xbmkj().f[0]++;
  cov_nfl7xbmkj().s[1]++;
  return a + b;
};

cov_nfl7xbmkj().s[2]++;

const sub = (a, b) => {
  cov_nfl7xbmkj().f[1]++;
  cov_nfl7xbmkj().s[3]++;
  return a - b;
};

function abs(x) {
  cov_nfl7xbmkj().f[2]++;
  cov_nfl7xbmkj().s[4]++;

  if (x >= 0) {
    cov_nfl7xbmkj().b[0][0]++;
    cov_nfl7xbmkj().s[5]++;
    return x;
  } else {
    cov_nfl7xbmkj().b[0][1]++;
    cov_nfl7xbmkj().s[6]++;
    return -x;
  }
}

cov_nfl7xbmkj().s[7]++;
window.add = add;
cov_nfl7xbmkj().s[8]++;
window.sub = sub;
cov_nfl7xbmkj().s[9]++;
window.abs = abs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiYWRkIiwiYSIsImIiLCJzdWIiLCJhYnMiLCJ4Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsR0FBRyxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQUE7QUFBQTtBQUNwQixTQUFPRCxDQUFDLEdBQUdDLENBQVg7QUFDRCxDQUZEOzs7O0FBSUEsTUFBTUMsR0FBRyxHQUFHLENBQUNGLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQUE7QUFBQTtBQUNwQixTQUFPRCxDQUFDLEdBQUdDLENBQVg7QUFDRCxDQUZEOztBQUlBLFNBQVNFLEdBQVQsQ0FBYUMsQ0FBYixFQUFnQjtBQUFBO0FBQUE7O0FBQ2QsTUFBSUEsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUFBO0FBQUE7QUFDVixXQUFPQSxDQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQUE7QUFBQTtBQUNMLFdBQU8sQ0FBQ0EsQ0FBUjtBQUNEO0FBQ0Y7OztBQUVEQyxNQUFNLENBQUNOLEdBQVAsR0FBYUEsR0FBYjs7QUFDQU0sTUFBTSxDQUFDSCxHQUFQLEdBQWFBLEdBQWI7O0FBQ0FHLE1BQU0sQ0FBQ0YsR0FBUCxHQUFhQSxHQUFiIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkID0gKGEsIGIpID0+IHtcbiAgcmV0dXJuIGEgKyBiXG59XG5cbmNvbnN0IHN1YiA9IChhLCBiKSA9PiB7XG4gIHJldHVybiBhIC0gYlxufVxuXG5mdW5jdGlvbiBhYnMoeCkge1xuICBpZiAoeCA+PSAwKSB7XG4gICAgcmV0dXJuIHhcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLXhcbiAgfVxufVxuXG53aW5kb3cuYWRkID0gYWRkXG53aW5kb3cuc3ViID0gc3ViXG53aW5kb3cuYWJzID0gYWJzXG4iXX0=
