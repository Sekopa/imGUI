<template>
    <div>
        <label>{{ label }}</label><br>
        <input 
            :placeholder="label"
            class="field "
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        >
    </div> 
</template>

<script>
export default {
    props: {
        label: {
            type: string,
            default: ''
        },
        modelValue: {
            type: [String, Number],
            default: ''
        }
    }
}
</script>