<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/">Kwarteng Reviews</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/movies">Movies</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/account">My Account</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/login"><button class="btn-warning">Log in</button></router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/signup"><button class="btn-outline-warning text-dark">Sign Up</button></router-link>
            </li>
            <li class="nav-item">
                <button class="btn-warning">Log out</button>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<style scoped>
.navbar-nav{
    align-items: center;
}
</style>