
let fStaff = []
let uStaff = []


const tag = new Vue({
    el: '#tag',
    data: {
        untaggedStaff: staff,
        filteredStaff: null,
        selectedTag: null,
        tags: teamTags,
        tagStyle: 'tag'

    },
    methods: {
        tagClick: function (object) {
            if(object.tag === 'All'){
                tag.untaggedStaff = staff
                tag.filteredStaff = null
                $('.tag').removeClass('selected');
                $(`.${object.tag}`).addClass('selected');
                // tag.selectedTag = object.tag

            } else {
                uStaff = []
                fStaff = []

                $('.tag').removeClass('selected');
                $(`.${object.tag}`).addClass('selected');
                tag.selectedTag = object.tag

                filterStaff()
                
                tag.untaggedStaff = uStaff
                tag.filteredStaff = fStaff
            }
        },
        addTag: function (object){
            if (object.teams[`${tag.selectedTag}`] == undefined){
                uStaff = []
                fStaff = []
                object.teams[`${tag.selectedTag}`] = teamTags[`${tag.selectedTag}`]
                filterStaff()
                tag.untaggedStaff = uStaff
                tag.filteredStaff = fStaff
            }
        },
         removeTag: function (object) {
            uStaff = []
            fStaff = []
            delete object.teams[`${tag.selectedTag}`]
            filterStaff()
            tag.untaggedStaff = uStaff
            tag.filteredStaff = fStaff
         }
    }

})


function filterStaff(){
    for (s of staff) {
        if (s.teams[`${tag.selectedTag}`] != undefined) {
            fStaff.push(s)
        } else {
            uStaff.push(s)
        }

    }
}