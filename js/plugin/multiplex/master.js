/*!
 * present 0.0.1 (2016-05-24, 19:33)
 */
!function(){function a(){var a={state:Reveal.getState(),secret:b.secret,socketId:b.id};c.emit("multiplex-statechanged",a)}if(!window.location.search.match(/receiver/gi)){var b=Reveal.getConfig().multiplex,c=io.connect(b.url);Reveal.addEventListener("slidechanged",a),Reveal.addEventListener("fragmentshown",a),Reveal.addEventListener("fragmenthidden",a),Reveal.addEventListener("overviewhidden",a),Reveal.addEventListener("overviewshown",a),Reveal.addEventListener("paused",a),Reveal.addEventListener("resumed",a)}}();