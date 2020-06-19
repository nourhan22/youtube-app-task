



export default {
    props:['item'],
    data() {
        return ({
            // list:this.list 
            subscribeNo:null,
            list: null
        })
    },
    components: {
        
    },
    methods: {
        // zeft:function(){
        //     fetch('https://www.googleapis.com/youtube/v3/channels/?part=snippet,contentDetails,statistics&id=UCaJZ13Vz8f5p4cPWLrUCfrg&key=AIzaSyAGz87bI3tgVfoInMb1ijuA2-nQbUo9A7U')
        //     .then(response => response.json()).then((data) => console.log("chaqnnel data",data)).catch(err => console.log(err))
        // }

    },
    computed:{
        no:function(){
            let base_url='https://www.googleapis.com/youtube/v3/channels/';
            let channelId=this.item.snippet.channelId;
            console.log("channelId",channelId)
             
               fetch(base_url+'?part=snippet,contentDetails,statistics&id='+channelId+'&key=AIzaSyC8rnG4ewx821LvEAQMQYDPAY7Jl1N8-kw')
               .then(response => response.json()).then((data) =>{ this.list = data;console.log("data",this.list); this.subscribeNo= this.list.items[0].statistics.subscriberCount; }
               )
               
               console.log("channel",this.subscribeNo);
               return this.subscribeNo
        }
     
     
     },
     filters: {
        subscribefilter: function (value) {
          if (!value) return ''
          if(value >= 1000 && value < 1000000)
          {
              value = value/1000 +'K'
          }
          else if (value >= 1000000)
          {
              value = value/1000000 +'M'
          }
          return value
        }
      }
}