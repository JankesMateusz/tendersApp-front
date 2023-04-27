const NewTenderItem = () => {
  type Dictionary<T> = {
    [key: string]: T;
  };

  const budgets: Dictionary<string> = {
    key1: "LESS_THAN_130000_PLN",
    key2: "LESS_THAN_623504_PLN",
    key3: "MORE_THAN_623504_PLN",
    key4: "LESS_THAN_957524_PLN",
    key5: "MORE_THAN_957524_PLN"
  };

  return (
    <form>
      <label>Title</label>
      <input type="text" />
      <label>Publication Date</label>
      <input type="date" />
      <label>Bid Date</label>
      <input type="date" />
      <label>Link</label>
      <input type="text" />
      <label>Link 2</label>
      <input type="text" />
      <label>Link 3</label>
      <input type="text" />
      <label>Status</label>
      <input type="text" />
      <label>Budget</label>
      <select name="budget">
        <option value={budgets.key1}>1</option>
        <option value={budgets.key2}>2</option>
        <option value={budgets.key3}>3</option>
        <option value={budgets.key4}>4</option>
        <option value={budgets.key5}>5</option>
      </select>
      <label>Comments</label>
      <input type="text" />
    </form>
  );
};


export default NewTenderItem