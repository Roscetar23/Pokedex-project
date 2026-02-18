interface ErrorStateProps {
  message: string;
}

function ErrorState({ message }: ErrorStateProps) {
  return (
    <div className="error-state">
      <p>{message}</p>
    </div>
  );
}

export default ErrorState;
