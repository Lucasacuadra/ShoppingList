<template>
    <h3>
        <div >
            <div :class="{done: isDone}">
                {{ingredient.name}}
            </div>
            
            <div class="measure">
                (Amount:  {{ingredient.qty}} {{ingredient.measurment}} )
            </div>
        </div>
        <div class="icons">
            <!-- This icon will mark the ingredient as "done" -> text-decoration: line-through ? -->
            <v-icon large class="item" @click="toggleDone">mdi-check-circle</v-icon>
            <!-- This icon deletes the Ingredient from the Shoppinglist/database -->
            <v-icon large class="item"  @click="$emit('deleteIngredient', ingredient.id)">mdi-delete</v-icon>
        </div>
    </h3>
</template>

<script>
export default {
    name: 'Ingredient',
    props: {
        ingredient: {
            type: Object
        }
    },
    data(){
        return {
            isDone: false
        }
    },
    methods: {
        toggleDone(){
            this.isDone = !this.isDone
            console.log(this.isDone)
        }
    }
}
</script>

<style>

h3 {
    display: flex;
    justify-content: space-between;  
}

.measure {
    font-weight: 300;
}

.done {
    text-decoration: line-through;
}

.item {
  padding-right: 5px;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>