export default function Custom404() {
    return (
        <section>
            <div className="bg-black text-white">
                <div className="flex h-screen">
                    <div className="m-auto text-center">
                        <div className="mt-5">
                            <img src="404.svg" />
                        </div>
                        <p className="text-sm md:text-base  p-2 m-4">The stuff you were looking for doesn't exist
                        </p>
                        <a href="/"
                            className="bg-transparent hover:bg-red-600 text-red-700 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-red-600 hover:border-transparent">
                            Goto Home</a>
                    </div>
                </div>
            </div>
        </section>
    )
}