"use client";

export default function Error({ error, reset }) {
    return (
        <div className="text-center py-12">
            <p className="text-red-500 text-lg">{error ? error.message : 'Failed to load posts.'}</p>
            <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                Try again
            </button>
        </div>
    );
}
