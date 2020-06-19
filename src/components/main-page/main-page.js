
import VideosListing from "../videos-listing/videos-listing.vue";
import SearchFilter from "../search-filter/search-filter.vue";
import ChannelDetails from "../channel-details/channel-details.vue";
let base_url = "https://www.googleapis.com/youtube/v3/search"
export default {
    data() {
        return ({
            list: null,
            searchTxt:'',
            type:"video,channel,playlist",
            order:"relevance",
            uploadDate:"n"
        })
    },
    components: {
        VideosListing,
        SearchFilter,
        ChannelDetails
    },
    methods: {
        execute: function (value,filterNo) {
            if( filterNo == 1)
            {
                this.type = value;
            }
            if(filterNo == 2)
            {
                this.order=value;
            }
           
            
            this.uploadDate="last hour"
            // let params = {
            //     part: "snippet",
            //     key: "AIzaSyAGz87bI3tgVfoInMb1ijuA2-nQbUo9A7U",
            //     q: "hello",
            //     maxResults: 10,
            //     type: "video"

            // }
            // fetch(base_url +'?part=snippet&key=AIzaSyAAsxSi3yD_1-PUKptdm1CAidgNtuMcct4&q=hello&type=video&maxResults: 2')
            // .then(response => response.json())
            // .then((data) => console.log(data))
            // .catch(err => console.log(err))
            fetch(base_url +'?part=snippet&key=AIzaSyCC9GCpSlFnw1jFu8jmiW4KiaZ-828OK_k&q='+this.searchTxt+'&type='+this.type+'&order='+this.order+'&maxResults=10&')
            .then(response => response.json()).then((data) => { this.list = data ;}
                )
                console.log(this.list);
                
        }
        
    },
    computed: {
        // listing: function(){
        //     return this.execute();
        // }
    }
}
