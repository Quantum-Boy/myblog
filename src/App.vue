<template>
<div class="alert alert-success alert-dismissible fade show" role="alert">
    <span class="alert-inner--icon"><i class="fas fa-check"></i></span>
    <span class="alert-inner--text"><strong>Success!</strong> This is a success alert—check it out!</span>
    <button type="button" class="undo" aria-label="Undo">Undo</button>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="alert alert-info alert-dismissible fade show" role="alert">
    <span class="alert-inner--icon"><i class="fas fa-info"></i></span>
    <span class="alert-inner--text"><strong>Info!</strong> This is an info alert—check it out!</span>
    <button type="button" class="undo" aria-label="Undo">Undo</button>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="alert alert-warning alert-dismissible fade show" role="alert">
    <span class="alert-inner--icon"><i class="fas fa-exclamation"></i></span>
    <span class="alert-inner--text"><strong>Warning!</strong> This is a warning alert—check it out!</span>
    <button type="button" class="undo" aria-label="Undo">Undo</button>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
<div class="alert alert-danger alert-dismissible fade show" role="alert">
    <span class="alert-inner--icon"><i class="fas fa-times"></i></span>
    <span class="alert-inner--text"><strong>Danger</strong> This is an error alert—check it out!</span>
    <button type="button" class="undo" aria-label="Undo">Undo</button>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
