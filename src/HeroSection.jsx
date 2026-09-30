import Frame from './assets/frame.png';

export default function HeroSection() {
    return (
        <section className="py-10">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="order-2 md:order-1">
                        <h1 className="text-4xl font-bold mb-4">Tasker</h1>
                        <p className="text-gray-600">
                            Effortlessly Organize, Prioritize, and Conquer Tasks
                            with Tasker - Your Personal Productivity Ally for
                            Seamless Goal Achievement and Stress-Free Task
                            Management.
                        </p>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                        <img src={Frame} width="326" height="290" alt="frame" />
                    </div>
                </div>
            </div>
        </section>
    );
}
