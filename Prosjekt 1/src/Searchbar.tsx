export default function Searchbar() {
    return (
        <div className="search">
        <form onSubmit={(e) => handleSubmit(e)}>
          <label>
            <input
              type="text"
              className="searchbar"
              placeholder="Skriv inn en by"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            ></input>
          </label>
          <input
            type="submit"
            placeholder="Hei"
            className="submitButton"
            value="Søk"
          />
        </form>
      </div>
        
    )
}