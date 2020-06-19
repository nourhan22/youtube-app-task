export default {
    data() {
        return ({
            isActive: false,
            isopen:false
        })
    },
    components: {
       
    },
    methods: {
        changeType : function (itemType,filterNo){
            // this.type =itemType;
            this.$emit('childToParent', itemType ,filterNo)
        }

      
        }
    }