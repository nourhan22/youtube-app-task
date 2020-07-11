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
    props:['id'],
    components: {
        VideosListing
    },
    methods: {
        getData:function(){
              
                fetch('https://www.googleapis.com/youtube/v3/channels/?part=snippet,contentDetails,statistics&id='+this.videoDetails.items[0].snippet.channelId+'&key=AIzaSyCQi5jy7l5f-HzHhpHBJKtKN0gU--TWkZs')
                .then(response => response.json()).then((data) => { this.channelDetails = data ;}
                    );
                    console.log("channel details",this.channelDetails);
              

        }
         
    }
    ,
     mounted(){
        fetch('https://www.googleapis.com/youtube/v3/videos/?part=snippet,contentDetails,statistics&id='+this.id+'&key=AIzaSyCQi5jy7l5f-HzHhpHBJKtKN0gU--TWkZs')
                .then(response => response.json()).then((data) => this.videoDetails = data).catch(err => console.log(err));
                console.log("videodetails",this.videoDetails);
                //channel-img
                
               
                //related video
                fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId='+this.id+'&key=AIzaSyCQi5jy7l5f-HzHhpHBJKtKN0gU--TWkZs&type=video&maxResults=10&')
                .then(response => response.json()).then((data) => { this.relatedVideoList = data ;}
                    );
                    console.log("videolist",this.relatedVideoList);
                    setTimeout(function(){
                        this.getData();
                    }, 2000);
                    
    }
}