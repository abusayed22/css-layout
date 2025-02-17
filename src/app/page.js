import Image from "next/image";
import styles from "./page.module.css";
import Layout_1 from "@/layouts/layout-1/Layout_1";
import Header from "../../components/Header";

export default function Home() {
  return (
    <Layout_1 >
      <div className={styles.page}>
        <main className={styles.main}>
          <div className="main_content">
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
              <div className="card">
                <img src="https://images.pexels.com/photos/30491755/pexels-photo-30491755/free-photo-of-majestic-green-mountain-ridge-in-martinique.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John" style={{ width: '100%' }} />
                <h1>John Doe</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div style={{ margin: '24px 0' }}>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
                <p><button>Contact</button></p>
              </div>
              <div className="card">
                <img src="https://images.pexels.com/photos/30491755/pexels-photo-30491755/free-photo-of-majestic-green-mountain-ridge-in-martinique.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John" style={{ width: '100%' }} />
                <h1>John Doe</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div style={{ margin: '24px 0' }}>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
                <p><button>Contact</button></p>
              </div>
              <div className="card">
                <img src="https://images.pexels.com/photos/30491755/pexels-photo-30491755/free-photo-of-majestic-green-mountain-ridge-in-martinique.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="John" style={{ width: '100%' }} />
                <h1>John Doe</h1>
                <p className="title">CEO & Founder, Example</p>
                <p>Harvard University</p>
                <div style={{ margin: '24px 0' }}>
                  <a href="#"><i className="fa fa-dribbble"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-facebook"></i></a>
                </div>
                <p><button>Contact</button></p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout_1>
  );
}
