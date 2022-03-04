<template>
     <div class="sign" id="sign_in" style="color: aliceblue; display: block;">
        <input type="text" id="user_name" placeholder="type your user name">
        <br><br>
        <input type="text" id="password" placeholder="type your password">
        <br><br>
        <button style="height: 10%; width: 20%;">sign in</button>
        <br>
        <br>
       <a style="color: rgb(0, 0, 0);" href="#" onclick="displaySignUp('sign_up')">not registered? sign up</a>
    </div>
</template>

<script>
    data() {
        return {
            
        }
    },
</script>