//加载loading
window.onload = function(){
	if(window.name==""){
		//window.name=0;
		$('.loadingTOP').addClass('slideOutUp')
		$('.loadingMiddle').addClass('middle')
		$('.loadingButtom').addClass('slideOutDown')
	}else{
		/*window.name=eval(window.name)+1;  window.name//页面刷新次数  初始值为null
		alert("你已经刷新页面"+window.name+"次");*/
		//window.name+=1;
		$('.loadingTOP,.loadingMiddle,.loadingButtom').remove();
	}
}

//======================loading end===================================
//======================== 第二屏动画 ====================================

//======================== 动画end ====================================
//======================== home屏鼠标经过动画   =============================
	 var enterObject = {
        left: function(self) {
            self.style.cssText="transform: rotatey(-5deg);";
      
        },
        right: function(self) {
            self.style.cssText="transform: rotatey(5deg);";
     
        },
        top: function(self) {
           self.style.cssText="transform: rotatex(-5deg);";
           
        },
        bottom: function(self) {
            self.style.cssText="transform: rotatex(5deg);";
            
        }
    };
    var leaveObject = {
        left: function(self) {
            self.style.cssText="transform: rotatey(0deg);";
           
        },
        right: function(self) {
            self.style.cssText="transform: rotatey(0deg);";
          
        },
        top: function(self) {
            self.style.cssText="transform: rotatex(0deg);";
            
        },
        bottom: function(self) {
        	self.style.cssText="transform: rotatex(0deg);";
         
        }
    };
    wen_direction.run('panel-default',enterObject, leaveObject);
//========================== home屏动画调用   ==========================================
	    $(function() {
	    	var width = $(".popup-container").width();
			var fragmentConfig = {
					container : '.img-flex',//显示容器
					line : 8,//多少行
					column : 10,//多少列
					width : width,//显示容器的宽度
					animeTime : 8000,//最长动画时间,图片的取值将在 animeTime*0.33 + animeTime*0.66之前取值 
					img : 'img/aboutbg.jpg'//图片路径
					};
					fragmentImg(fragmentConfig);
				});

//======================= 专业技能    ==========================================
 var o = {
			init: function() {
				this.diagram();
			},
			random: function(l, u) {
				return Math.floor((Math.random() * (u - l + 1)) + l);
			},
			diagram: function() {
				var r = Raphael('diagram', 600, 600),
					rad = 73;
				r.circle(300, 300, 85).attr({
					stroke: 'none',
					fill: '#193340'
				});
				var title = r.text(300, 300, 'loading...').attr({
					font: '20px Arial',
					fill: '#fff'
				}).toFront();
				r.customAttributes.arc = function(value, color, rad) {
					var v = 3.6 * value,
						alpha = v == 360 ? 359.99 : v,
						random = o.random(91, 240),
						a = (random - alpha) * Math.PI / 180,
						b = random * Math.PI / 180,
						sx = 300 + rad * Math.cos(b),
						sy = 300 - rad * Math.sin(b),
						x = 300 + rad * Math.cos(a),
						y = 300 - rad * Math.sin(a),
						path = [
							['M', sx, sy],
							['A', rad, rad, 0, +(alpha > 180), 1, x, y]
						];
					return {
						path: path,
						stroke: color
					}
				}
				$('.get').find('.arc').each(function(i) {
					var t = $(this),
						color = t.find('.color').val(),
						value = t.find('.percent').val(),
						text = t.find('.text').text();
					rad += 30;
					var z = r.path().attr({
						arc: [value, color, rad],
						'stroke-width': 26
					});
					z.mouseover(function() {
						this.animate({
							'stroke-width': 50,
							opacity: .75
						}, 1000, 'elastic');
						if(Raphael.type != 'VML') //solves IE problem
							this.toFront();
						title.animate({
							opacity: 0
						}, 500, '>', function() {
							this.attr({
								text: text + '\n' + value + '%'
							}).animate({
								opacity: 1
							}, 500, '<');
						});
					}).mouseout(function() {
						this.animate({
							'stroke-width': 26,
							opacity: 1
						}, 1000, 'elastic');
					});
				});
			}
		}
		$(function() {
			o.init();
		});
		
			$(function(){
        		$('#banner').carousel({
        			interval:5000
        		});
        		$('[data-toggle="popover"]').popover();
        		$('.carousel-control').css('line-Height',$('#banner').height()+'px');
        	})
        	$(window).resize(function(){
        		$('.carousel-control').css('line-Height',$('#banner').height()+'px');
        	})