import { useState } from "react";

function JoinPrivateModal({ isOpen, onClose, onJoin }) {

  const [code, setCode] = useState("");

  if (!isOpen) return null;

  const handleClose = () => {
    setCode("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-base-100 p-6 rounded-xl w-96">

        <h2 className="text-xl font-bold mb-4">Private Session</h2>

        <input
          type="text"
          placeholder="Enter Invite Code"
          className="input input-bordered w-full mb-4"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="flex justify-end gap-3">

          <button className="btn btn-ghost" onClick={handleClose}>
            Cancel
          </button>

          <button
            className="btn btn-primary"
            onClick={() => onJoin(code)}
          >
            Join
          </button>

        </div>

      </div>

    </div>
  );
}

export default JoinPrivateModal;