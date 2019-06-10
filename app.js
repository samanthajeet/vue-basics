new Vue({
  el: '#app',
  data: {
    title: 'Becoming a Vue ninja',
    coords: {
      x: 0,
      y: 0
    },
    name: 'Sam',
    showName: true,
    showAge: true,
    items: ['mushroom', 'green shells', 'red shells', 'banana', 'star'],
    ninjas: [
      { name: 'Olivia', age:45, belt: 'Black'},
      { name: 'Sam', age:30, belt: 'Brown'},
      { name: 'Risolli', age:40, belt: 'Orange'}
    ]
  }, 
  methods: {
    logEvent(e){
      console.log(e)
    },
    logCoords(e){
      this.coords.x = e.offsetX
      this.coords.y = e.offsetY
    },
    logmessage(){
      console.log('bingpot')
    },
    toggleName(){
      this.showName = !this.showName
    }
  }
})

