namespace APIFUN.Data
{
    public interface IFoodRepository
    {
        IEnumerable<MarriottFood> Foods { get; }
    }
}
