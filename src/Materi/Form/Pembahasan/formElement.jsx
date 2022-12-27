import React from "react";

export default class FormElement extends React.Component {
  state = {
    nama: "",
    jurusan: "",
    gender: "",
    alamat: "",
    member: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? "YES" : "NO"}`);

    this.setState({
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: "",
    });
  };

  render() {
    return (
      <div style={{ margin: "10px auto", border: "1px solid gray", padding: "20px" }}>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Nama: <input type="text" name="nama" onChange={(e) => this.setState({ nama: e.target.value })} value={this.state.nama} />
            {/* defaultValue gunakan apabila ingin tidak mengubah */}
          </label>
          <br />
          <br />
          <label>
            Jurusan:
            <select nama="Jurusan" onChange={(e) => this.setState({ jurusan: e.target.value })}>
              {/* defaultChecked digunakan apabila ingin tidak mengubahnya */}
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
            </select>
          </label>
          <br />
          <br />
          <label>
            Jenis Kelamin:
            <input type="radio" value="Laki-Laki" name="gender" onChange={(e) => this.setState({ gender: e.target.value }, () => console.log(this.state))} /> laki-laki
            <input type="radio" value="Perempuan" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Perempuan
          </label>
          <br />
          <br />
          <label>
            Alamat:
            <br />
            <textarea cols="30" rows="10" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value })} value={this.state.alamat} />
          </label>
          <br />
          <br />
          Member: <input type="checkbox" value={true} name="member" onChange={(e) => this.setState({ member: e.target.checked })} />
          <br />
          <br />
          <button type="submit">Submit</button>
          <br />
        </form>
      </div>
    );
  }
}
