# instagram-gallery

En egen nettside som fremstår som en underside av [porteføljen min](https://paalss.github.io/portfolio/).

Grunnen til at jeg separerer denne siden fra resten av porteføljen, er at denne siden trenger teknologi som gjør at nettsiden kan ta 15 sekunder å laste inn, som er veldig ufordelaktig. Ved å holde resten av porteføljen utenfor denne teknologien, sparer jeg mesteparten av porteføljen for den lange innlastningstiden.

![Instagram_gallery](images/1.png)

## Besøk siden

**Galleriet i portefølje GUI:** [https://paalss-instagram-gallery.herokuapp.com/portfolio](https://paalss-instagram-gallery.herokuapp.com/portfolio)

**Bare galleriet:** [https://paalss-instagram-gallery.herokuapp.com/](https://paalss-instagram-gallery.herokuapp.com/)

Nettsiden kan ta 15 sekunder å laste inn :(.

## Localhost setup

Lag .env-fil med innhold:

```
ACCESS_TOKEN="Sett inn Instagram access token"
```

Installer packages:

```
npm install
```

Serve:

```
npm run dev
```

Gå til:

[localhost:5000](http://localhost:5000/)