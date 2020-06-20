import VideosListing from "../videos-listing/videos-listing.vue";
export default {
    data() {
        return ({
            videoDetails:null,
            relatedVideoList:null,
            relatedVideos:true,
            channelDetails:null
        })
    },
    components: {
        VideosListing
    },
    methods: {
        getData:function(){
               fetch('https://www.googleapis.com/youtube/v3/videos/?part=snippet,contentDetails,statistics&id=YQHsXMglC9A&key=AIzaSyCC9GCpSlFnw1jFu8jmiW4KiaZ-828OK_k')
                .then(response => response.json()).then((data) => this.videoDetails = data).catch(err => console.log(err));
                console.log("videodetails",this.videoDetails);
                //channel-img
                fetch('https://www.googleapis.com/youtube/v3/channels/?part=snippet,contentDetails,statistics&id='+this.videoDetails.items[0].snippet.channelId+'&key=AIzaSyCC9GCpSlFnw1jFu8jmiW4KiaZ-828OK_k')
                .then(response => response.json()).then((data) => { this.channelDetails = data ;}
                    );
                    console.log("channel details",this.channelDetails);
                //related video
                fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=YQHsXMglC9A&key=AIzaSyCC9GCpSlFnw1jFu8jmiW4KiaZ-828OK_k&type=video&maxResults=10&')
                .then(response => response.json()).then((data) => { this.relatedVideoList = data ;}
                    );
                    console.log("videolist",this.relatedVideoList);

        }
         
    }
    ,
    mounted(){
       // this.getData();
    }
}