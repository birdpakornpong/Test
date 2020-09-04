var express = require('express');
var User = require('../models/DOSCGModule');
var cache = require('memory-cache');
const getDOSCGPage = (req, res) => {
     res.send('Hello Expressjs and router and get controller');
};
function getXYZvalue(req, res){
     var A = 5
     var B = 9
     var C = 15
     var D = 23
     BminusA = parseInt(B)-parseInt(A)
     CminusB = parseInt(C)-parseInt(B) 
     DminusC = parseInt(D)-parseInt(C) 
     
     CminusB_minus_BminusA = parseInt(CminusB)-parseInt(BminusA)
     DminusC_minus_CminusB = parseInt(DminusC)-parseInt(CminusB)

     if (CminusB_minus_BminusA === DminusC_minus_CminusB){
          mid = parseInt(CminusB_minus_BminusA)
          firstdown = parseInt(BminusA)-parseInt(mid)
          Y = parseInt(A)-parseInt(firstdown)
          AminusY = parseInt(A)-parseInt(Y)
          seconddown = parseInt(AminusY)-parseInt(mid)
          X = parseInt(Y)-parseInt(seconddown)
          console.log('X',X)
          console.log('Y',Y)
          up = parseInt(DminusC)+parseInt(mid)
          Z = parseInt(D)+parseInt(up)
          console.log('Z',Z)
          let result = {
               X : X,
               Y : Y,
               Z : Z
          }
          console.log('result',result)
          cache.put(result)
          res.send(result)
          return result
     } else {
          console.log("error")
     }
};


function getBCvalue(req, res){
     var A = 21
     var AplusB = 23
     var AplusC = -21
     B = parseFloat(AplusB) - parseFloat(A)
     C = parseFloat(AplusC) - parseFloat(A)
     let answer = {
          B : B,
          C : C
     }
     console.log('answer',answer)
     cache.put(answer)
     res.send(answer)
     return answer
}
module.exports = {getDOSCGPage,getXYZvalue,getBCvalue};