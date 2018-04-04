var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    //-------------------
    //---- Your Code ----
    //-------------------    
    var x1=p1.x;
    var y1=p1.y;
    var x2=p2.x;
    var y2=p2.y;
    var dx=x2-x1;
    var dy=y2-y1;
    var d=Math.sqrt(dx*dx+dy*dy);
    return d;    
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    //-------------------
    //---- Your Code ----
    //-------------------
    var distances=[];
    data.forEach(function(item){
        var dx=newPoint.x-item.x;
    var dy=newPoint.y-item.y;
    item.distance=Math.sqrt(dx*dx+dy*dy);  
    });
    return data;
};

// find k closest points
exercise.findClosest = function(k,data){
    //-------------------
    //---- Your Code ----
    //------------------- 
    data.sort(function(a,b){
        return a.distance-b.distance;
    });

    return data.slice(0,k);    
};

module.exports = exercise;
