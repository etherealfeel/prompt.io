import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Footer from '@components/Footer';

export const metadata = {
    title: 'prompt.io',
    description: 'Share prompts with the entire world!',
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Provider>
                    <div className="main">
                        <div className="gradient" />
                    </div>

                    <main className="app">
                        <Nav />
                        <div className="max-w-6xl">{children}</div>
                        <Footer />
                    </main>
                </Provider>
            </body>
        </html>
    );
};

export default RootLayout;
