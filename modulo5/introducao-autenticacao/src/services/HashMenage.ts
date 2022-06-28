export class HashManage {
    public  hash = async (password: string): Promise<string> => {
      const rounds = Number("12")
        const salt = await bcrypt.genSalt(rounds)
        const hash = await bcrypt.hash(password, salt)
        return hash

    }
    public compare = async password: string, hash: string  => {
        return await bcrypt.compare(password, hash)
    }
}