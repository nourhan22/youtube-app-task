
// import VideosListing from "../videos-listing/videos-listing.vue";
// import SearchFilter from "../search-filter/search-filter.vue";
// import ChannelDetails from "../channel-details/channel-details.vue";
// import VideoDetails from "../video-details/video-details.vue";
// import search_api from'~/local-data-testing/search-api.js';
// import 'D:\Insta\youtube-app\src\local-data-testing\search-api.js'; 
let base_url = "https://www.googleapis.com/youtube/v3/search"
export default {
    data() { 
        return ({
            list: null,
            searchTxt:'',
            type:"video,channel,playlist",
            order:"relevance",
            uploadDate:"n",
            q:null
        })
    },
    components: {
    },
    methods: {
        execute: function () {
            // //getting from api
            // this.uploadDate="last hour"
            // fetch(base_url +'?part=snippet&key=AIzaSyAAsxSi3yD_1-PUKptdm1CAidgNtuMcct4&q=hello&type=video&maxResults: 2')
            // .then(response => response.json())
            // .then((data) => console.log(data))
            // .catch(err => console.log(err))
            fetch(base_url +'?part=snippet&key=AIzaSyAAsxSi3yD_1-PUKptdm1CAidgNtuMcct4&q='+this.searchTxt+'&type='+this.type+'&order='+this.order+'&maxResults=100&')
            .then(response => response.json()).then((data) => { if(data !=null)this.list = data }
                )
            
               
                this.$root.$emit('sibiling',this.list);
                
        }
    },
    computed: {
        // listing: function(){
        //     return this.execute();
        // }
    },
    mounted: function() {
        this.$root.$on('sendfilter',(value,filterNo)=> {
            if( filterNo == 1)
            {
                this.type = value;
            }
            else if(filterNo == 2)
            {
                this.order=value;
            }
        });
        this.execute();
    }
}
