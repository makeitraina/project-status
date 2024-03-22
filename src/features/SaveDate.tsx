'use client';

export function SaveDate() {
  return (
    <div>
      <h2>
        Use the button below to tell us when you have finished a step. We will
        record the last time you finished a step and move on to the next one.
      </h2>
      <div className="flex items-center justify-center h-screen">
        <button className="border border-black p-2 rounded">Im finished</button>
      </div>
    </div>
  );
}
