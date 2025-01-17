<template>
  <footer id="footer" class="bg-orange-500 py-20">
    <BaseContainer class="grid grid-cols-3 gap-10">
      <div class="text-orange-950 font-serif text-4xl">
        Shibulé ist eine bunte Spielwiese für Regenbogeneinhörner.
      </div>
    </BaseContainer>
  </footer>
</template>

<style>
#footer {
  position: relative;
  z-index: 10;
}
#footer:before {
  content: '';
  position: absolute;
  top: -30px;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/footer-wave.svg');
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: -1;
  opacity: 0.9;
}
</style>
