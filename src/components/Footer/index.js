import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerColumn1}>
        <div className={classes.footerDownloadText}>
          <b>Uygulamayı indirin</b>
        </div>
        <div
          className={classes.footerAppStore}
          style={{ backgroundImage: `url("assets/appStore.png` }}
        />
        <div
          className={classes.footerGooglePlay}
          style={{ backgroundImage: `url("assets/googlePlay.png` }}
        />
        <div
          className={classes.footerAppGalery}
          style={{ backgroundImage: `url("assets/appGalery.png` }}
        />
      </div>
      <div className={classes.footerColumn2}>
        <div className={classes.footerFollowText}>
          <b>Bizi takip edin</b>
        </div>
        <div
          className={classes.footerFacebookIcon}
          style={{ backgroundImage: `url("assets/facebook.png` }}
        />
        <div
          className={classes.footerLinkedIIcon}
          style={{ backgroundImage: `url("assets/linkedIn.png` }}
        />
        <div
          className={classes.footerInstagramIcon}
          style={{ backgroundImage: `url("assets/instagram.png` }}
        />
        <div
          className={classes.footerYouTubeIcon}
          style={{ backgroundImage: `url("assets/youTube.png` }}
        />
      </div>
    </footer>
  );
}
