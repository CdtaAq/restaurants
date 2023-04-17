import { AiOutlineGithub, AiFillLinkedin, AiFillCode } from "react-icons/ai";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_section}>
        <h4>OrderQue.com</h4>
        <p>
          foodapp is the final capstone project of the MIT - Fullstack
          Development with MERN Course. 
        <div className={styles.footer_subsection}>
          <span></span>
          <span></span>
        </div>
        <div className={styles.footer_subsection}>
          <span>Copyright</span>
          <span>MIT - License</span>
        </div>
      </div>
      <div className={styles.footer_section}>
        <h4>Contact</h4>
        <div>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiOutlineGithub />
              </div>
              <div></div>
            </div>
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiFillLinkedin />
              </div>
              <div></div>
            </div>
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.footer_contact_item}>
              <div className={styles.footer_contact_item_icon}>
                <AiFillCode />
              </div>
              <div></div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
