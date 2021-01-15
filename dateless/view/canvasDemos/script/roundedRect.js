var basicRR = new Vue({
    el : '#basicRR',
    data : {
        translateX : 0,
        translateY : 0,
        rotate : 0,
        width : 0,
        height : 0,
        radius : 0,
        borderColor : '#000000',
        contentColor : '#ffffff'
    },
    methods : {
        createRR : function () {
            if ( (this.radius * 2) > Math.min(this.width,this.height) || !this.width || !this.height){
                alert('The parameters are not able to draw a closed rectangle!');
                return false;
            } else {
                var canvas = $('#drawRR').get(0);
                if (canvas.getContext){
                    var context = canvas.getContext('2d');
                    this.roundedRect(this.translateX,this.translateY,this.rotate,this.width,this.height,this.radius,this.borderColor,this.contentColor,context);
                } else {
                    console.log('canvas does not have the function called getContext!');
                }

            }
        },
        roundedRect : function (x,y,angle,width,height,radius,borderColor,contentColor,context) {
            context.clearRect(0,0,600,600);
            context.save();
                context.translate(x,y);
                context.rotate((angle/180)*Math.PI);
                context.beginPath();
                    context.moveTo(0,radius);
                    context.quadraticCurveTo(0,0,radius,0);
                    context.lineTo(width-radius,0);
                    context.quadraticCurveTo(width,0,width,radius);
                    context.lineTo(width,height-radius);
                    context.quadraticCurveTo(width,height,width-radius,height);
                    context.lineTo(radius,height);
                    context.quadraticCurveTo(0,height,0,height-radius);
                context.closePath();

                context.strokeStyle = borderColor;
                context.stroke();
                context.fillStyle = contentColor;
                context.fill();
            context.restore();
        }
    }
});
