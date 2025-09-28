import Link from "next/link";

export default function NotFound() {
    return (
        <div className="max-w-7xl mx-auto shadow-sm">
            <div className="flex flex-col gap-6 px-6 py-8 justify-center items-center bg-black rounded-lg">
                <h2 className="text-2xl font-bold">Not Found</h2>
                <p className="text-gray-100">Could not find requested resource</p>
                <Link 
                href="/"
                className="px-4 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
                >Return home</Link>
            </div>
        </div>
    );
}
