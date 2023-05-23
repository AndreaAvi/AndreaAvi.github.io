let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Tengo una pasión por la tecnología y la programación.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
