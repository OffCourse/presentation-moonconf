/*!
 * present 0.0.1 (2016-05-24, 19:33)
 */
!function(){var a=Reveal.getConfig().multiplex,b=a.id,c=io.connect(a.url);c.on(a.id,function(a){a.socketId===b&&"localhost:1947"!==window.location.host&&Reveal.setState(a.state)})}();