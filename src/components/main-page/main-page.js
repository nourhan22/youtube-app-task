
import VideosListing from "../videos-listing/videos-listing.vue";
import SearchFilter from "../search-filter/search-filter.vue";
// import ChannelDetails from "../channel-details/channel-details.vue";
// import VideoDetails from "../video-details/video-details.vue";
// let base_url = "https://www.googleapis.com/youtube/v3/search"
export default {
    data() {
        return ({
           list:null
        })
    },
    components: {
        VideosListing,
        SearchFilter
      
    },
    methods: {
        execute: function (value,filterNo) {
            this.uploadDate="last hour";
            this.$root.$emit('sendfilter',value,filterNo);
                
        }
        
    },
    computed(){
        this.$root.$on('sibiling',data => {
            console.log(data);
            this.list =data;
        });
    }
}
