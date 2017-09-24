<template>
    <div>
        <h1>My To Do List</h1>
        <input type="text" name="" id="" v-model="newItem" /> 
        <button @click="addItemToList">添加</button>
        <ul>
            <li v-for="item in listItems" :key="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            listItems: ['list1', 'list2', 'list3'],
            newItem:''
        }
    },
    methods:{
        addItemToList(){
            if(this.newItem.trim()){
                this.listItems.push(this.newItem)
                this.newItem = ''
            }
        }
    }
}
</script>
