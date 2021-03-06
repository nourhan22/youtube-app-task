import VideosListing from "../videos-listing/videos-listing.vue";
export default {
    props:['id'],
    data() {
        return ({
            channelDetails:null,
            channelPlayList:null
        })
    },
    components: {
        VideosListing
    },
    methods: {
        getData:function(){
            //let base_url='https://www.googleapis.com/youtube/v3/channels/';
            // let channelId=this.item.snippet.channelId;
            // console.log("channelId",channelId)
             
            //    fetch(base_url+'?part=snippet,contentDetails,statistics&id='+channelId+'&key=AIzaSyCC9GCpSlFnw1jFu8jmiW4KiaZ-828OK_k')
            //    .then(response => response.json()).then((data) =>{ this.list = data;console.log("data",this.list); this.subscribeNo= this.list.items[0].statistics.subscriberCount; }
               //)
               fetch('https://www.googleapis.com/youtube/v3/channels/?part=snippet,contentDetails,statistics&id='+this.id+'&key=AIzaSyCQi5jy7l5f-HzHhpHBJKtKN0gU--TWkZs')
                .then(response => response.json()).then((data) => this.channelDetails = data).catch(err => console.log(err));
                fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId='+this.id+'&maxResults=10&key=AIzaSyCQi5jy7l5f-HzHhpHBJKtKN0gU--TWkZs')
                .then(response => response.json()).then((data) => this.channelPlayList = data).catch(err => console.log(err));
                console.log("channeldetails",this.channelDetails);
                console.log("channelplaylist",this.channelPlayList);

        }
         
    }
    ,
    mounted(){
       this.getData();
    }
}