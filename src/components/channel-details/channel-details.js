import VideosListing from "../videos-listing/videos-listing.vue";
export default {
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
               fetch('https://www.googleapis.com/youtube/v3/channels/?part=snippet,contentDetails,statistics&id=UCaJZ13Vz8f5p4cPWLrUCfrg&key=AIzaSyAGz87bI3tgVfoInMb1ijuA2-nQbUo9A7U')
                .then(response => response.json()).then((data) => this.channelDetails = data).catch(err => console.log(err));
                fetch('https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=UCq-Fj5jknLsUf-MWSy4_brA&maxResults=10&key=AIzaSyAGz87bI3tgVfoInMb1ijuA2-nQbUo9A7U')
                .then(response => response.json()).then((data) => this.channelPlayList = data).catch(err => console.log(err));
                console.log("channeldetails",this.channelDetails);
                console.log("channelplaylist",this.channelPlayList);

        }
         
    }
    ,
    mounted(){
       // this.getData();
    }
}