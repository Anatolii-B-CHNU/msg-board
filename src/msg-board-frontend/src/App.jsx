import { useState, useEffect } from 'react';
import { msg_board_backend } from 'declarations/msg-board-backend';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    msg_board_backend.get_messages().then(setMessages);
  }, []);

  function handleAddMessage(event) {
    event.preventDefault();
    if (newMessage.trim() === '') return;

    msg_board_backend.add_message(newMessage).then(() => {
      setNewMessage('');
      msg_board_backend.get_messages().then(setMessages);
    });
  }

  function handleClearMessages() {
    msg_board_backend.clear_messages().then(() => {
      msg_board_backend.get_messages().then(setMessages);
    });
  }

  return (
    <main className="container-fluid mt-4" style={{ backgroundColor: '#f7f9fc', minHeight: '100vh', padding: '2rem' }}>
    <img src="/logo2.svg" alt="DFINITY logo" style={{ maxWidth: '200px' }} />
    
    <section className="my-4">
      <h2>Distributed Message Board</h2>
      <h2>Add a message:</h2>
      <form onSubmit={handleAddMessage} className="mb-3 d-flex flex-wrap gap-2">
        <input
          type="text"
          className="form-control"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message"
          maxLength={100}
          style={{ flex: 1, minWidth: '200px' }}
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </section>

    <section>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h2>
          Messages <span className="badge bg-secondary">{messages.length}</span>
        </h2>
        <button className="btn btn-danger" onClick={handleClearMessages}>
          Clear All
        </button>
      </div>

      <div className="row row-cols-1 row-cols-md-2 g-3">
        {messages.map((msg, idx) => (
          <div className="col" key={idx}>
            <div className="card shadow-sm border-primary">
              <div className="card-body">
                <p className="card-text">{msg}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
  );
}

export default App;
